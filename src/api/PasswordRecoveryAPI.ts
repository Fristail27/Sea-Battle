import {instance} from "./authApi";

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
        return instance.post('auth/set-new-password', {
            password: pass,
            resetPasswordToken: token
        })
    }

}