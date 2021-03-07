import {Dispatch} from "react";
import {authAPI, userRequestData} from "../API/authApi";

const initialState: UserDataType = {
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
    isAuth?: boolean | null
}

type InitialStateType = typeof initialState

type ActionsType = ReturnType<typeof authTryAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case AUTH_TRY:
            return {
                ...state,
                ...action.userData
            }
        default:
            return state
    }
}

type authTryACType = {
    type: typeof AUTH_TRY
    userData: UserDataType
}

export const authTryAC = (userData: UserDataType): authTryACType => {
    return {
        type: AUTH_TRY,
        userData
    } as const
}

export const authenticationUserLoginTC = (data: userRequestData) =>
    (dispatch: Dispatch<ActionsType>)=> {
        authAPI.userAuthorization(data)
            .then((res) => {
                dispatch(authTryAC(res.data))
            })
            .catch((err) => {
                const error = err.response ? err.response.data.error : (err.message + ", more details on console")
            })
    }
