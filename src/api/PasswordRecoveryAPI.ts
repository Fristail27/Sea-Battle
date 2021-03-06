import axios from "axios";

const baseURL = "https://neko-back.herokuapp.com/2.0/"

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
})

export const passwordRecoveryAPI = {
    sendEmailForChangePassword(mail: string) {
        return instance.post('auth/forgot', {
            email: mail,
            from: "Fristail27  <Fristail27@gmail.com>",
            message: `<div style=\"background-color: lime; padding: 15px\">
                            password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
                      </div>`
        })
    }
}