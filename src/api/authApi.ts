import axios from 'axios'
import {UserDataType} from "../store/auth-Reducer";

export type userRequestData = {
    email: string
    password: string
    rememberMe: boolean
}

export const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    withCredentials: true
})

export const authAPI = {
    userAuthorization(data: userRequestData) {
        return instance.post<UserDataType>("auth/login", data)
    },
    meRequest () {
        return instance.post('auth/me',{})
    },
    logOut () {
        return instance.delete('auth/me',{})
    }
}