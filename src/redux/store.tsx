import {combineReducers, configureStore} from '@reduxjs/toolkit'

import {loadState, saveState} from "../utils/localStorage";
import {IRootState, rootSlice} from "./reducers/root-reducer";

const rootReducer = combineReducers({
    root: rootSlice.reducer
})

const persistedState: IRootState = loadState();
const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        root: persistedState
    }
})
export default store;

store.subscribe(() => {
    saveState(store.getState().root);
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']

