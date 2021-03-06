import {applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "./app-Reducer";
import { authReducer } from "./auth-Reducer";
import thunkMiddleware from 'redux-thunk'
import { passwordRecoveryReducer } from "./passwordRecovery-Reducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    pass: passwordRecoveryReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;