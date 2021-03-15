import {Dispatch} from "react";
import {authAPI, userRequestData} from "../api/authApi";
import {onChangeAppStatusAC, OnChangeAppStatusActionType} from "./app-Reducer";

export const initialState = {
    userData: null,
    isAuth: false,
    loginSuccess: false,
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const AUTH_TRY = "AUTH_TRY"

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
} | null

type InitialStateType = {
    userData: UserDataType,
    isAuth: boolean
    loginSuccess: boolean,
}

type ActionsType = ReturnType<typeof authTryAC>

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
    (dispatch: Dispatch<ActionsType | OnChangeAppStatusActionType>)=> {
        dispatch(onChangeAppStatusAC("loading"))
        authAPI.userAuthorization(data)
            .then((res) => {
                if(res.data && !res.data.error) {
                    dispatch(authTryAC(res.data, true))
                    dispatch(onChangeAppStatusAC("succeeded"))
                }else {
                    dispatch(authTryAC(initialState.userData, false))
                    dispatch(onChangeAppStatusAC("failed"))
                }
            })
            .catch((err) => {
                // const error = err.response ? err.response.data.error : (err.message + ", more details on console")
                dispatch(onChangeAppStatusAC("failed"))
            })
    }
