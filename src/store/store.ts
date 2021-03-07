import {applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "./app-Reducer";
import { authReducer } from "./auth-Reducer";
import thunkMiddleware from 'redux-thunk'
import {regReducer} from "./reg-Reducer";
import { passwordRecoveryReducer } from "./passwordRecovery-Reducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    pass: passwordRecoveryReducer,
    reg: regReducer
})

// сразу добавляю middleware для использования redux-thunk

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;