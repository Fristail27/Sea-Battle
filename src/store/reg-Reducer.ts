import {DataType, regAPI} from "../api/registration-api";
import {Dispatch} from "redux";
import {onChangeAppStatusAC} from "./app-Reducer";
import {errHandlerInTC} from "../utils/validations/errHandler";

type InitialStateType = typeof initialState
type ActionsType = RegisterActionType | SetErrorActionType

const SET_REGISTER = "reg/SET-REGISTER"
const SET_ERROR = "reg/SET-ERROR"

const initialState = {
    succeedRegister: false,
    error: undefined as string | undefined
}

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
        type: SET_REGISTER,
        succeedRegister
    } as const
}
export const setErrorAC = (error: string) => {
    return {
        type: SET_ERROR,
        error
    } as const
}

type RegisterActionType = ReturnType<typeof registerAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>

export const registerTC = (data: DataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        await regAPI.register(data)
        dispatch(registerAC(true))
        dispatch(onChangeAppStatusAC("succeeded"))
    } catch (err) {
        errHandlerInTC(dispatch, err, onChangeAppStatusAC, setErrorAC)
    }
}