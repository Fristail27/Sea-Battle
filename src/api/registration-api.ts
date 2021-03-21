import {instance} from "./authApi";

export type DataType = {
    email: string
    password: string
}
type RegisterResponseType = {
    addedUser: {}
    error?: string
}

export const regAPI = {
    register(data: DataType) {
        return instance.post<RegisterResponseType>("auth/register", data)
    }
}