import axios from 'axios'
import {UserDataType} from "../store/auth-Reducer";

const settings = {
    withCredentials: true
}

export type userRequestData = {
    email: string
    password: string
    rememberMe: boolean
}

let instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    ...settings
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