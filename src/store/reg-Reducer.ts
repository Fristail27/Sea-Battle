import {DataType, regAPI} from "../api/registration-api";
import {Dispatch} from "react";
import {onChangeAppStatusAC, OnChangeAppStatusActionType} from "./app-Reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    succeedRegister: false,
    error: undefined as string|undefined
}

type InitialStateType = typeof initialState

type ActionsType = RegisterActionType|SetErrorActionType

export const regReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "reg/SET-REGISTER":
            return {...state, succeedRegister: action.succeedRegister}
        case "reg/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

const registerAC = (succeedRegister: boolean) => {
    return {
        type: "reg/SET-REGISTER",
        succeedRegister
    } as const
}
const setErrorAC = (error: string) => {
    return {
        type: "reg/SET-ERROR",
        error
    } as const
}

type RegisterActionType = ReturnType<typeof registerAC>
type SetErrorActionType = ReturnType<typeof setErrorAC>

export const registerTC = (data: DataType) => (dispatch: Dispatch<ActionsType|OnChangeAppStatusActionType>) => {
    dispatch(onChangeAppStatusAC("loading"))
    regAPI.register(data)
        .then((res) => {
            if (!res.data.error) {
                dispatch(registerAC(true))
                dispatch(onChangeAppStatusAC("succeeded"))
            } else {
                dispatch(setErrorAC(res.data.error))
                dispatch(onChangeAppStatusAC("failed"))
            }
        })
        .catch((err) => {
            dispatch(setErrorAC(err.message))
            dispatch(onChangeAppStatusAC("failed"))
        })
}