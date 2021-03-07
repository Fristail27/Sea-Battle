import {DataType, regAPI} from "../api/registration-api";
import {Dispatch} from "react";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType ,
    succeedRegister: false,
    error: undefined as string|undefined
}

type InitialStateType = typeof initialState

type ActionsType = RegisterActionType|SetErrorActionType|SetStatusActionType

export const regReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "reg/SET-STATUS":
            return {...state, status: action.status}
        case "reg/SET-REGISTER":
            return {...state, succeedRegister: action.succeedRegister}
        case "reg/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

const setStatusAC = (status: RequestStatusType) => {
    return {
        type: "reg/SET-STATUS",
        status
    } as const
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

type SetStatusActionType = ReturnType<typeof setStatusAC>
type RegisterActionType = ReturnType<typeof registerAC>
type SetErrorActionType = ReturnType<typeof setErrorAC>

export const registerTC = (data: DataType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC("loading"))
    regAPI.register(data)
        .then((res) => {
            if (!res.data.error) {
                dispatch(registerAC(true))
                dispatch(setStatusAC("succeeded"))
            } else {
                dispatch(setErrorAC(res.data.error))
                dispatch(setStatusAC("failed"))
            }
        })
        .catch((err) => {
            dispatch(setErrorAC(err.message))
            dispatch(setStatusAC("failed"))
        })
}