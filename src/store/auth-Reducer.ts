import {Dispatch} from "react";
import {authAPI, userRequestData} from "../api/authApi";
import {onChangeAppStatusAC, OnChangeAppStatusActionType} from "./app-Reducer";

const initialState = {
    userData: {
        _id: null,
        email: null,
        name: "dsad",
        avatar: null,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        isAdmin: null,
        verified: null,
        rememberMe: null,
        error: null,
        isAuth: null
    },
    loginSuccess: false,
    isAuth: false
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type appStatusType = {
    status: RequestStatusType
    error: string
}
const appStatus: appStatusType = {
    status: "idle",
    error: ""
}

const AUTH_TRY = "AUTH_TRY"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"

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
}

type InitialStateType = {
    userData: UserDataType,
    loginSuccess: boolean,
    isAuth: boolean
}

type ActionsType = ReturnType<typeof authTryAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case AUTH_TRY:
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state
    }
}

type authTryACType = {
    type: typeof AUTH_TRY
    userData: UserDataType
}
export const authTryAC = (userData: UserDataType): authTryACType => ({type: AUTH_TRY, userData})

export const authenticationUserLoginTC = (data: userRequestData) =>
    (dispatch: Dispatch<ActionsType | OnChangeAppStatusActionType>)=> {
        dispatch(onChangeAppStatusAC("loading"))
        authAPI.userAuthorization(data)
            .then((res) => {
                if(!res.data.error) {
                    dispatch(authTryAC(res.data))
                    dispatch(onChangeAppStatusAC("succeeded"))
                }else {
                    dispatch(onChangeAppStatusAC("failed"))
                }
            })
            .catch((err) => {
                const error = err.response ? err.response.data.error : (err.message + ", more details on console")
                dispatch(onChangeAppStatusAC("failed"))
            })
    }
