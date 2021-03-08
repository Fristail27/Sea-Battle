import React, {ChangeEvent, useState} from "react";
import {Login} from "./Login/Login";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {authenticationUserLoginTC, UserDataType} from "../../store/auth-Reducer";
import { Redirect } from "react-router-dom";
import {onChangeAppStatusAC} from "../../store/app-Reducer";
import {RequestStatusType} from "../../store/reg-Reducer";

type LoginContainerPropsType = {
 user:UserDataType
}

const LoginContainer = (props: LoginContainerPropsType) => {

    const dispatch = useDispatch()
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    let [email, setEmailText] = useState("")
    let [password, setPasswordText] = useState("")
    let [rememberMe, setRememberMe] = useState(false)

    const emailHandler = (email: string) => {
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
    const onSubm = () => {
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
            onSubm={onSubm}
        />
    )
}

const mstp = (state: AppRootStateType) => {
    return {
        user: state.auth.userData
    }
}

export default connect(mstp, {})(LoginContainer)