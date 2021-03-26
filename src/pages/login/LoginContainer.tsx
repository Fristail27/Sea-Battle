import React, {ChangeEvent, useState} from "react";
import {Login} from "./Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {authenticationUserLoginTC} from "../../store/auth-Reducer";
import { Redirect } from "react-router-dom";
import {onChangeAppStatusAC, RequestStatusType} from "../../store/app-Reducer";
import {validations} from "../../utils/validations/validations";

export const LoginContainer = () => {

    const dispatch = useDispatch()
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    let [email, setEmailText] = useState("")
    let [password, setPasswordText] = useState("")
    let [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState<string>("")

    const emailHandler = (email: string) =>{
        setEmailText(email)
        if (statusApp !== "idle") {
            dispatch(onChangeAppStatusAC("idle"))
        }
    }
    const passwordHandler = (pass: string) => {
        setPasswordText(pass)
        if (statusApp !== "idle") {
            dispatch(onChangeAppStatusAC("idle"))
        }
    }
    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
        if (statusApp !== "idle") {
            dispatch(onChangeAppStatusAC("idle"))
        }
    }
    const onSubmit = () => {
        if (email && password) {
            if (!validations.emailValid(email)) {
                dispatch(authenticationUserLoginTC({email, password, rememberMe}))
            } else {
                setError("incorrect email or password")
            }
        } else {
            setError("required email and password")
        }
    }

    if(isAuth) {
        return <Redirect to={"./profile"}/>
    }

    return (
        <Login
            emailHandler={emailHandler}
            checkHandler={checkHandler}
            passwordHandler={passwordHandler}
            email={email}
            password={password}
            check={rememberMe}
            onSubmit={onSubmit}
            error={error}
        />
    )
}