import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {rootSlice} from "./reducers/root-reducer";


const rootReducer = combineReducers({
    root:rootSlice.reducer
})

export default configureStore({
    reducer: rootReducer,
})

 export type RootState = ReturnType<typeof rootReducer>
 export type AppStore = ReturnType<typeof configureStore>
 export type AppDispatch = AppStore['dispatch']

