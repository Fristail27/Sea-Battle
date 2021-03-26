import {Dispatch} from "redux";
import {authAPI, userRequestData} from "../api/authApi";
import {onChangeAppStatusAC, OnChangeAppStatusActionType, setErrorAC, SetErrorActionType} from "./app-Reducer";
import {errHandlerInTC} from "../utils/validations/errHandler";

export const initialState: InitialStateType = {
    userData: null,
    isAuth: false,
    loginSuccess: false,
}

const AUTH_TRY = "auth/AUTH_TRY"
const LOGOUT = "auth/LOGOUT"

export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
    isAuth: boolean
}

type InitialStateType = {
    userData: UserDataType | null,
    isAuth: boolean,
    loginSuccess: boolean,
}

type ActionsType = authTryACType | logoutACType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case AUTH_TRY:
            return {
                ...state,
                userData: action.userData,
                isAuth: action.isAuth
            }
        case LOGOUT:
            return {
                ...state,
                userData: null,
                isAuth: false
            }
        default:
            return state
    }
}

type authTryACType = {
    type: typeof AUTH_TRY
    userData: UserDataType
    isAuth: boolean
}
export const authTryAC = (userData: UserDataType, isAuth: boolean): authTryACType => ({
    type: AUTH_TRY,
    userData,
    isAuth
})

type logoutACType = {
    type: typeof LOGOUT
}
export const logoutAC = (): logoutACType => ({type: LOGOUT})

export const authenticationUserLoginTC = (data: userRequestData) =>
    async (dispatch: Dispatch<ActionsType | OnChangeAppStatusActionType | SetErrorActionType>) => {
        try {
            dispatch(onChangeAppStatusAC("loading"))
            const res = await authAPI.userAuthorization(data)
            if (res.data && !res.data.error) {
                dispatch(authTryAC(res.data, true))
                dispatch(onChangeAppStatusAC("succeeded"))
            } else {
                dispatch(authTryAC(initialState.userData as any, false))
                dispatch(onChangeAppStatusAC("failed"))
            }
        } catch (err) {
            errHandlerInTC(dispatch, err, onChangeAppStatusAC, setErrorAC)
        }
    }

export const meRequestTC = () => async (dispatch: Dispatch<OnChangeAppStatusActionType | authTryACType>) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        const res = await authAPI.meRequest()
        dispatch(authTryAC(res.data, true))
        dispatch(onChangeAppStatusAC("idle"))
    } catch (err) {
        errHandlerInTC(dispatch, err, onChangeAppStatusAC)
    }
};

export const logoutTC = () => async (dispatch: Dispatch<OnChangeAppStatusActionType | logoutACType>) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        await authAPI.logOut()
        dispatch(logoutAC())
        dispatch(onChangeAppStatusAC("succeeded"))
    } catch (err) {
        errHandlerInTC(dispatch, err, onChangeAppStatusAC)
    }
}