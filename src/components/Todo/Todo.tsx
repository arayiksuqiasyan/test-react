import React from "react";
import classes from './Todo.module.scss'
import {useForm} from "react-hook-form";
import {v4 as uuidv4} from 'uuid';

import List from "../List/List";
import AppButton from "../../UI/AppButton/AppButton";
import {ITodo} from "../models/todo";
import {useAppDispatch, useAppSelector} from "../../redux";
import {addEditableItemId, addListItem, editListItem} from "../../redux/reducers/root-reducer";

const Todo = () => {
    const dispatch = useAppDispatch()
    const {list, editedId} = useAppSelector((state) => state.root)

    const {register, handleSubmit, setValue, watch, setFocus} = useForm();

    const onSubmitHandler = (data: any) => {
        const {todo} = data
        if (editedId) {
            const myTodo: ITodo = {completed: false, message: todo, id: editedId ? editedId : uuidv4()}
            dispatch(editListItem(myTodo))
            setValue('todo', '')
        } else {
            const myTodo: ITodo = {completed: false, message: todo, id: editedId ? editedId : uuidv4()}
            dispatch(addListItem(myTodo))
            setValue('todo', '')
        }

    };

    function filterFn(todo: ITodo) {
        const searchValue = watch('search')
        const regex = new RegExp(searchValue, 'gi')
        if (!searchValue) return true;
        return regex.test(todo.message)
    }

    function onEditHandler(id: string, message: string) {
        setValue('todo', message)
        dispatch(addEditableItemId(id))
        setFocus('todo')
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className={classes.inputWrapper}>
                    <input
                        placeholder={'Enter Todo ...'}
                        className={classes.input}
                        {...register("todo")}
                    />
                    <input
                        placeholder={'Search...'}
                        className={classes.input}
                        {...register("search")}
                    />
                    <AppButton type={'submit'}>Submit</AppButton>
                </div>
            </form>
            <List list={list.filter(filterFn)} onEdit={onEditHandler}/>
        </div>
    )
}

export default Todo
