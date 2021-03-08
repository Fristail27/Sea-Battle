import {passwordRecoveryAPI} from "../api/PasswordRecoveryAPI";
import {Dispatch} from "react";

export type StatusForRequestType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    valueOfInputEmail: "" as string,
    errorStatusForPassRec: null as string | null,
    errorStatusForNewPass: null as string | null,
    valueInputPass: "" as string,
    valueInputPassRec: "" as string,
    statusForNewPass: "none" as StatusForRequestType,
    statusForPassRec: "none" as StatusForRequestType,
}

const ON_CHANGE_INPUT_EMAIL = "passwordRecovery/ON_CHANGE_INPUT_EMAIL"
const SET_ERROR_STATUS_FOR_PASS_REC = "passwordRecovery/SET_ERROR_STATUS_FOR_PASS_REC"
const SET_ERROR_STATUS_FOR_NEW_PASS = "passwordRecovery/SET_ERROR_STATUS_FOR_NEW_PASS"
const ON_CHANGE_INPUT_PASS = "passwordRecovery/ON_CHANGE_INPUT_PASS"
const ON_CHANGE_INPUT_PASS_REC = "passwordRecovery/ON_CHANGE_INPUT_PASS_REC"
const ON_CHANGE_STATUS_NEW_PASS = "passwordRecovery/ON_CHANGE_STATUS_NEW_PASS"
const ON_CHANGE_STATUS_PASS_REC = "passwordRecovery/ON_CHANGE_STATUS_PASS_REC"

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
type OnChangeStatusNewPassActionType = {
    type: typeof ON_CHANGE_STATUS_NEW_PASS
    status: StatusForRequestType
}
type OnChangeStatusPassRecActionType = {
    type: typeof ON_CHANGE_STATUS_PASS_REC
    status: StatusForRequestType
}
type ActionsType =
    OnChangeInputActionType
    | SetErrorStatusForPassRecActionType
    | SetErrorStatusForNewPassActionType
    | OnChangeInputPassActionType
    | onChangeInputPassRecActionType
    | OnChangeStatusNewPassActionType
    | OnChangeStatusPassRecActionType

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
        case ON_CHANGE_STATUS_NEW_PASS:
            return {
                ...state,
                statusForNewPass: action.status
            }
        case ON_CHANGE_STATUS_PASS_REC:
                return {
                    ...state,
                    statusForPassRec: action.status
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
export const onChangeStatusNewPassAC = (status: StatusForRequestType): OnChangeStatusNewPassActionType => ({
    type: ON_CHANGE_STATUS_NEW_PASS,
    status
})
export const onChangeStatusPassRecAC = (status: StatusForRequestType): OnChangeStatusPassRecActionType => ({
    type: ON_CHANGE_STATUS_PASS_REC,
    status
})
//thunks
export const sendEmailForRecoveryPassTC = (mail: string) => async (dispatch: Dispatch<OnChangeInputActionType | SetErrorStatusForPassRecActionType | OnChangeStatusPassRecActionType>) => {
    try {
        dispatch(onChangeStatusPassRecAC("loading"))
        await passwordRecoveryAPI.sendEmailForChangePassword(mail)
        dispatch(onChangeInputAC(""))
        dispatch(onChangeStatusPassRecAC("succeeded"))
    } catch (err) {
        if (err.response) {
            dispatch(setErrorStatusForPassRecAC(err.response.data.error))
            dispatch(onChangeStatusPassRecAC("idle"))
        } else {
            dispatch(setErrorStatusForPassRecAC(err.message))
            dispatch(onChangeStatusPassRecAC("idle"))
        }
    }
}
export const sendPassForNewPassTC = (pass: string, token: string) => async (dispatch: Dispatch<OnChangeInputPassActionType | onChangeInputPassRecActionType | SetErrorStatusForNewPassActionType | OnChangeStatusNewPassActionType>) => {
    try {
        dispatch(onChangeStatusNewPassAC("loading"))
        await passwordRecoveryAPI.sendNewPassword(pass, token)
        dispatch(onChangeInputPassAC(""))
        dispatch(onChangeInputPassRecAC(""))
        dispatch(onChangeStatusNewPassAC("succeeded"))

    } catch (err) {
        if (err.response) {
            dispatch(setErrorStatusForNewPassAC(err.response.data.error))
            dispatch(onChangeStatusNewPassAC("idle"))
        } else {
            dispatch(setErrorStatusForNewPassAC(err.message))
            dispatch(onChangeStatusNewPassAC("idle"))
        }
    }
}

