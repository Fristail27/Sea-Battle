import axios from "axios";

const baseURL = "https://neko-back.herokuapp.com/2.0/"

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
})


export const passwordRecoveryAPI = {
    sendEmailForChangePassword () {
        return instance.post('auth/forgot', {
            email: "fristail27@gmail.com",
            from: "3234423  <solder272@gmail.com>",
            message: "<div>21343</div>"
        })
    }
}