import axios from "axios"

export type DataType = {
    email: string
    password: string
}
type RegisterResponseType = {
    addedUser: {}
    error?: string
}

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/"
})

export const regAPI = {
    register(data: DataType) {
        return instance.post<RegisterResponseType>("auth/register", data)
    }
}