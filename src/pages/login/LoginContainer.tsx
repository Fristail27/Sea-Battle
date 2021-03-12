import React, {ChangeEvent, useState} from "react";
import {Login} from "./Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {authenticationUserLoginTC} from "../../store/auth-Reducer";
import { Redirect } from "react-router-dom";
import {onChangeAppStatusAC, RequestStatusType} from "../../store/app-Reducer";

export const LoginContainer = () => {

    const dispatch = useDispatch()
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const error = useSelector<AppRootStateType, string|undefined>(state => state.reg.error)
    let [email, setEmailText] = useState("")
    let [password, setPasswordText] = useState("")
    let [rememberMe, setRememberMe] = useState(false)

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
        dispatch(authenticationUserLoginTC({email, password, rememberMe}))
    }
    if(statusApp==="succeeded") {
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