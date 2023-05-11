import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {rootSlice} from "./reducers/root-reducer";
import {loadState, saveState} from "../utils/localStorage";


const rootReducer = combineReducers({
    root:rootSlice.reducer
})

const persistedState = loadState();
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

