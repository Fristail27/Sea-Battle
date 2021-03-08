import {passwordRecoveryAPI} from "../api/PasswordRecoveryAPI";
import {Dispatch} from "react";
import {onChangeAppStatusAC, OnChangeAppStatusActionType} from "./app-Reducer";

const initialState = {
    valueOfInputEmail: "" as string,
    errorStatusForPassRec: null as string | null,
    errorStatusForNewPass: null as string | null,
    valueInputPass: "" as string,
    valueInputPassRec: "" as string,
}

const ON_CHANGE_INPUT_EMAIL = "passwordRecovery/ON_CHANGE_INPUT_EMAIL"
const SET_ERROR_STATUS_FOR_PASS_REC = "passwordRecovery/SET_ERROR_STATUS_FOR_PASS_REC"
const SET_ERROR_STATUS_FOR_NEW_PASS = "passwordRecovery/SET_ERROR_STATUS_FOR_NEW_PASS"
const ON_CHANGE_INPUT_PASS = "passwordRecovery/ON_CHANGE_INPUT_PASS"
const ON_CHANGE_INPUT_PASS_REC = "passwordRecovery/ON_CHANGE_INPUT_PASS_REC"


type InitialStateType = typeof initialState

type OnChangeInputActionType = {
    type: typeof ON_CHANGE_INPUT_EMAIL
    value: string
}
type SetErrorStatusForPassRecActionType = {
    type: typeof SET_ERROR_STATUS_FOR_PASS_REC
    error: string | null
}
type SetErrorStatusForNewPassActionType = {
    type: typeof SET_ERROR_STATUS_FOR_NEW_PASS
    error: string | null
}
type OnChangeInputPassActionType = {
    type: typeof ON_CHANGE_INPUT_PASS
    value: string
}
type onChangeInputPassRecActionType = {
    type: typeof ON_CHANGE_INPUT_PASS_REC
    value: string
}
type ActionsType =
    OnChangeInputActionType
    | SetErrorStatusForPassRecActionType
    | SetErrorStatusForNewPassActionType
    | OnChangeInputPassActionType
    | onChangeInputPassRecActionType

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ON_CHANGE_INPUT_EMAIL:
            return {
                ...state,
                valueOfInputEmail: action.value
            }
        case SET_ERROR_STATUS_FOR_PASS_REC:
            return {
                ...state,
                errorStatusForPassRec: action.error
            }
        case SET_ERROR_STATUS_FOR_NEW_PASS:
            return {
                ...state,
                errorStatusForNewPass: action.error
            }
        case ON_CHANGE_INPUT_PASS:
            return {
                ...state,
                valueInputPass: action.value
            }
        case ON_CHANGE_INPUT_PASS_REC:
            return {
                ...state,
                valueInputPassRec: action.value
            }
        default:
            return state
    }
}

//actions
export const onChangeInputAC = (value: string): OnChangeInputActionType => ({type: ON_CHANGE_INPUT_EMAIL, value})
export const setErrorStatusForPassRecAC = (error: string | null): SetErrorStatusForPassRecActionType => ({
    type: SET_ERROR_STATUS_FOR_PASS_REC,
    error
})
export const setErrorStatusForNewPassAC = (error: string | null): SetErrorStatusForNewPassActionType => ({
    type: SET_ERROR_STATUS_FOR_NEW_PASS,
    error
})
export const onChangeInputPassAC = (value: string): OnChangeInputPassActionType => ({type: ON_CHANGE_INPUT_PASS, value})
export const onChangeInputPassRecAC = (value: string): onChangeInputPassRecActionType => ({
    type: ON_CHANGE_INPUT_PASS_REC,
    value
})

//thunks
export const sendEmailForRecoveryPassTC = (mail: string) => async (dispatch: Dispatch<OnChangeInputActionType | SetErrorStatusForPassRecActionType | OnChangeAppStatusActionType>) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        await passwordRecoveryAPI.sendEmailForChangePassword(mail)
        dispatch(onChangeInputAC(""))
        dispatch(onChangeAppStatusAC("succeeded"))
    } catch (err) {
        if (err.response) {
            dispatch(setErrorStatusForPassRecAC(err.response.data.error))
            dispatch(onChangeAppStatusAC("failed"))
        } else {
            dispatch(setErrorStatusForPassRecAC(err.message))
            dispatch(onChangeAppStatusAC("failed"))
        }
    }
}
export const sendPassForNewPassTC = (pass: string, token: string) => async (dispatch: Dispatch<
    OnChangeInputPassActionType |
    onChangeInputPassRecActionType |
    SetErrorStatusForNewPassActionType |
    OnChangeAppStatusActionType>
) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        await passwordRecoveryAPI.sendNewPassword(pass, token)
        dispatch(onChangeInputPassAC(""))
        dispatch(onChangeInputPassRecAC(""))
        dispatch(onChangeAppStatusAC("succeeded"))

    } catch (err) {
        if (err.response) {
            dispatch(setErrorStatusForNewPassAC(err.response.data.error))
            dispatch(onChangeAppStatusAC("failed"))
        } else {
            dispatch(setErrorStatusForNewPassAC(err.message))
            dispatch(onChangeAppStatusAC("failed"))
        }
    }
}

