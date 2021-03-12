import {Dispatch} from "redux";
import {authAPI, userRequestData} from "../api/authApi";
import {onChangeAppStatusAC, OnChangeAppStatusActionType} from "./app-Reducer";
import {setErrorAC, SetErrorActionType} from "./reg-Reducer";
import {errHandlerInTC} from "../utils/validations/errHandler";

export const initialState: InitialStateType = {
    userData: {
        _id: null,
        email: null,
        name: null,
        avatar: null,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        isAdmin: null,
        verified: null,
        rememberMe: null,
        error: null,
        isAuth: false
    },
    isAuth: false,
    loginSuccess: false,
}

const AUTH_TRY = "auth/AUTH_TRY"
const LOGOUT = "auth/LOGOUT"

export type UserDataType = {
    _id: string | null
    email: string | null
    name: string | null
    avatar?: string | null
    publicCardPacksCount: number | null
    created: Date | null
    updated: Date | null
    isAdmin: boolean | null
    verified: boolean | null
    rememberMe: boolean | null
    error?: string | null
    isAuth: boolean
}

type InitialStateType = {
    userData: UserDataType | any,
    isAuth: boolean,
    loginSuccess: boolean,
}

type ActionsType = authTryACType |SetErrorActionType | logoutACType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
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
export const authTryAC = (userData: UserDataType, isAuth: boolean): authTryACType => ({type: AUTH_TRY, userData, isAuth})

type logoutACType = {
    type: typeof LOGOUT
}
export const logoutAC = ():logoutACType => ({type: LOGOUT})

export const authenticationUserLoginTC = (data: userRequestData) =>
    (dispatch: Dispatch<ActionsType | OnChangeAppStatusActionType | SetErrorActionType>)=> {
        dispatch(onChangeAppStatusAC("loading"))
        authAPI.userAuthorization(data)
            .then((res) => {
                if(!res.data.error) {
                    dispatch(authTryAC(res.data, true))
                    dispatch(onChangeAppStatusAC("succeeded"))
                }else {
                    dispatch(authTryAC(initialState.userData as any, false))
                    dispatch(onChangeAppStatusAC("failed"))
                }
            })
            .catch((err) => {
                errHandlerInTC(dispatch, err, onChangeAppStatusAC, setErrorAC)
            })
    }

export const meRequestTC = () => async (dispatch: Dispatch<OnChangeAppStatusActionType | authTryACType>) => {
    try {
        dispatch(onChangeAppStatusAC("loading"))
        const res = await authAPI.meRequest()
        dispatch(authTryAC(res.data, true))
        dispatch(onChangeAppStatusAC("idle"))
    }   catch (err) {
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