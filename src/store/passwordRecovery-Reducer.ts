import {passwordRecoveryAPI} from "../api/PasswordRecoveryAPI";
import {Dispatch} from "react";

const initialState = {
    valueOfInputEmail: "" as string,
    errorStatus: null as string | null
}

const ON_CHANGE_INPUT = "passwordRecovery/ON_CHANGE_INPUT"
const SET_ERROR_STATUS = "passwordRecovery/SET_ERROR_STATUS"

type InitialStateType = typeof initialState

type OnChangeInputActionType = {
    type: typeof ON_CHANGE_INPUT
    value: string
}
type SetErrorStatusActionType = {
    type: typeof SET_ERROR_STATUS
    error: string | null
}
type ActionsType = OnChangeInputActionType | SetErrorStatusActionType

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ON_CHANGE_INPUT:
            return {
                ...state,
                valueOfInputEmail: action.value
            }
        case SET_ERROR_STATUS:
            return {
                ...state,
                errorStatus: action.error
            }
        default:
            return state
    }
}


export const onChangeInputAC = (value: string): OnChangeInputActionType => ({type: ON_CHANGE_INPUT, value})
export const setErrorStatusAC = (error: string | null): SetErrorStatusActionType => ({type: SET_ERROR_STATUS, error})

export const sendEmailForRecoveryPassTC =  (mail: string) => async (dispatch: Dispatch<OnChangeInputActionType | SetErrorStatusActionType>) => {
    try {
        await passwordRecoveryAPI.sendEmailForChangePassword(mail)
        dispatch(onChangeInputAC(""))
    } catch (err) {
        dispatch(setErrorStatusAC(err.response.data.error))
    }
}

