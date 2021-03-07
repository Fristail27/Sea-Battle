import React, {ChangeEvent, useState} from "react";
import {Login} from "./Login/Login";
import {connect, useDispatch} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {authenticationUserLoginTC, UserDataType} from "../../store/auth-Reducer";
import { Redirect } from "react-router-dom";

type LoginContainerPropsType = {
 user:UserDataType
    loginSuccess: boolean
}

const LoginContainer = (props: LoginContainerPropsType) => {
    const dispatch = useDispatch()

    let [email, setEmailText] = useState("")
    let [password, setPasswordText] = useState("")
    let [rememberMe, setRememberMe] = useState(false)

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailText(e.currentTarget.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordText(e.currentTarget.value)
    }
    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }
    const onSubm = () => {
        dispatch(authenticationUserLoginTC({email, password, rememberMe}))
    }
    if(props.loginSuccess) {
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
        user: state.auth.userData,
        loginSuccess: state.auth.loginSuccess
    }
}

export default connect(mstp, {})(LoginContainer)