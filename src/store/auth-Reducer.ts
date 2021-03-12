import {Dispatch} from "react";
import {authAPI, userRequestData} from "../api/authApi";
import {onChangeAppStatusAC, OnChangeAppStatusActionType} from "./app-Reducer";
import {setErrorAC, SetErrorActionType} from "./reg-Reducer";

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

const AUTH_TRY = "AUTH_TRY"

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
    userData: UserDataType,
    isAuth: boolean,
    loginSuccess: boolean,
}

type ActionsType = ReturnType<typeof authTryAC>|SetErrorActionType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case AUTH_TRY:
            return {
                ...state,
                userData: action.userData,
                isAuth: action.isAuth
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

export const authenticationUserLoginTC = (data: userRequestData) =>
    (dispatch: Dispatch<ActionsType | OnChangeAppStatusActionType | SetErrorActionType>)=> {
        dispatch(onChangeAppStatusAC("loading"))
        authAPI.userAuthorization(data)
            .then((res) => {
                if(!res.data.error) {
                    dispatch(authTryAC(res.data, true))
                    dispatch(onChangeAppStatusAC("succeeded"))
                }else {
                    dispatch(authTryAC(initialState.userData, false))
                    dispatch(onChangeAppStatusAC("failed"))
                }
            })
            .catch((err) => {
                dispatch(onChangeAppStatusAC("failed"))
                if (err.response) {
                    dispatch(setErrorAC(err.response.data.error))
                } else {
                    dispatch(setErrorAC(err.message))
                }
            })
    }
