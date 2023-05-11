import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {ITodo} from "../../components/models/todo";

export interface IRootState {
    list: ITodo[]
    editedId: string
}

const initialState: IRootState = {
    list: [],
    editedId: ''
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        addListItem: (state: IRootState, action: PayloadAction<ITodo>) => {
            state.list = [...state.list, action.payload]
        },
        editListItem: (state: IRootState, action: PayloadAction<ITodo>) => {
            const foundedIndex = state.list.findIndex((el) => el.id === action.payload.id)
            const foundedItem = state.list[foundedIndex]
            const newList = [...state.list]
            const newItem = {...foundedItem, message: action.payload.message}
            newList.splice(foundedIndex, 1, newItem)
            state.list = newList

            state.editedId = ''

        },
        removeListItem: (state: IRootState, action: PayloadAction<string>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        addEditableItemId: (state: IRootState, action: PayloadAction<string>) => {
            state.editedId = action.payload
        },
        toggleComplete: (state: IRootState, action: PayloadAction<string>) => {
            state.list = state.list.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
        },
    },
})

export const {
    addListItem,
    editListItem,
    toggleComplete,
    removeListItem,
    addEditableItemId,
} = rootSlice.actions
