import {passwordRecoveryAPI} from "../api/PasswordRecoveryAPI";
import {Dispatch} from "redux";
import {onChangeAppStatusAC} from "./app-Reducer";
import {errHandlerInTC} from "../utils/validations/errHandler";

export const initialState = {
    errorStatusForNewPass: null as string | null,
    valueInputPass: "" as string,
    valueInputPassRec: "" as string,
}

const SET_ERROR_STATUS_FOR_NEW_PASS = "passwordRecovery/SET_ERROR_STATUS_FOR_NEW_PASS"
const ON_CHANGE_INPUT_PASS = "passwordRecovery/ON_CHANGE_INPUT_PASS"
const ON_CHANGE_INPUT_PASS_REC = "passwordRecovery/ON_CHANGE_INPUT_PASS_REC"


type InitialStateType = typeof initialState

type SetErrorStatusForNewPassActionType = ReturnType<typeof setErrorStatusForNewPassAC>
type OnChangeInputPassActionType = ReturnType<typeof onChangeInputPassAC>
type onChangeInputPassRecActionType = ReturnType<typeof onChangeInputPassRecAC>
type ActionsType = SetErrorStatusForNewPassActionType | OnChangeInputPassActionType | onChangeInputPassRecActionType

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_ERROR_STATUS_FOR_NEW_PASS:
            return {...state, errorStatusForNewPass: action.error}
        case ON_CHANGE_INPUT_PASS:
            return {...state, valueInputPass: action.value}
        case ON_CHANGE_INPUT_PASS_REC:
            return {...state, valueInputPassRec: action.value}
        default:
            return state
    }
}

//actions
export const setErrorStatusForNewPassAC = (error: string | null) => ({
    type: SET_ERROR_STATUS_FOR_NEW_PASS, error
} as const)
export const onChangeInputPassAC = (value: string) => ({type: ON_CHANGE_INPUT_PASS, value} as const)
export const onChangeInputPassRecAC = (value: string) => ({type: ON_CHANGE_INPUT_PASS_REC, value} as const)

//thunks
export const sendEmailForRecoveryPassTC = (mail: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        await passwordRecoveryAPI.sendEmailForChangePassword(mail)
        dispatch(onChangeAppStatusAC("succeeded"))
    } catch (err) {
        errHandlerInTC(dispatch, err, onChangeAppStatusAC)
    }
}
export const sendPassForNewPassTC = (pass: string, token: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        await passwordRecoveryAPI.sendNewPassword(pass, token)
        dispatch(onChangeInputPassAC(""))
        dispatch(onChangeInputPassRecAC(""))
        dispatch(onChangeAppStatusAC("succeeded"))
    } catch (err) {
        errHandlerInTC(dispatch, err, onChangeAppStatusAC, setErrorStatusForNewPassAC)
    }
}

