import axios from "axios";

const baseURL = "https://neko-back.herokuapp.com/2.0/"
const baseURLForLocal = "http://localhost:7542/2.0/"
const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
})
const instanceLoc = axios.create({
    withCredentials: true,
    baseURL: baseURLForLocal,
})
export const passwordRecoveryAPI = {
    sendEmailForChangePassword(mail: string) {
        return instance.post('auth/forgot', {
            email: mail,
            from: "Fristail27  <Fristail27@gmail.com>",
            message: `<div style="background-color: lime; padding: 15px">
                            password recovery link: <a href='http://localhost:3000/Progect#/new-password-page/$token$'>link</a>
                      </div>`
        })
    },
    sendNewPassword (pass:string, token:string) {
        return instanceLoc.post('auth/set-new-password', {
            password: pass,
            resetPasswordToken: token
        })
    }

}