import React, {ChangeEvent, useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import s from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {registerTC, RequestStatusType} from "../../store/reg-Reducer";
import {Preloader} from "../common/preloader/Preloader";
import {onChangeAppStatusAC} from "../../store/app-Reducer";

const Registration = () => {
    const dispatch = useDispatch()
    const succeedRegister = useSelector<AppRootStateType, boolean>(state => state.reg.succeedRegister)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const error = useSelector<AppRootStateType, string | undefined>(state => state.reg.error)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const [emailErr, setEmailErr] = useState<string>("")
    const [passwordErr, setPasswordErr] = useState<string>("")
    const [sendError, setSendError] = useState<string>("")

    const onMailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailErr('Invalid email address')
        } else {
            setEmailErr('')
        }
        if (statusApp !== "idle") dispatch(onChangeAppStatusAC("idle"))
        setEmail(e.currentTarget.value)
    }
    const onPassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (password.length < 7) {
            setPasswordErr('Password must be more than 7 characters')
        } else {
            setPasswordErr('')
        }
        if (statusApp !== "idle") dispatch(onChangeAppStatusAC("idle"))
        setPassword(e.currentTarget.value)
    }
    const onRepeatPassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.currentTarget.value)
        if (statusApp !== "idle") dispatch(onChangeAppStatusAC("idle"))
    }
    const onBlurEmail = () => {
        if (email === "") {
            setEmailErr('Email Required')
        }
    }
    const onBlurPass = () => {
        if (password === "") {
            setPasswordErr('Password Required')
        }
    }
    const onButtonClick = () => {
        if (email && password) {
            if (!emailErr && !passwordErr) {
                dispatch(registerTC({email, password}))
            } else {
                setSendError("incorrect email or password")
            }
        } else {
            setSendError("required email and password")
        }
    }

    if (succeedRegister) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={s.registrationModule}>
            <h1>Registration</h1>
            <form className={s.registrationForm} onSubmit={(e) => e.preventDefault()}>
                <input className={emailErr && s.error} value={email} onBlur={onBlurEmail} onChange={onMailChangeHandler}
                       placeholder="Email" type={"email"}/>
                {emailErr && <div className={s.inputErr} style={{marginTop: "39px"}}>{emailErr}</div>}
                <input className={passwordErr && s.error} value={password} onBlur={onBlurPass}
                       onChange={onPassChangeHandler}
                       placeholder="Password" type={"password"}/>
                {passwordErr && <div className={s.inputErr} style={{marginTop: "79px"}}>{passwordErr}</div>}
                <input className={passwordErr && s.error} value={repeatPassword} onChange={onRepeatPassChangeHandler}
                       placeholder="Repeat password" type={"password"}/>
                {password !== repeatPassword ?
                    <div className={s.inputErr} style={{marginTop: "120px"}}>Different Password</div> : ""}
                <button disabled={statusApp === "loading"} onClick={onButtonClick}>Register</button>
                {sendError && <div className={s.inputErr} style={{marginTop: "165px"}}>{sendError}</div>}
                {error ? <div className={s.inputErr} style={{marginTop: "165px"}}>{error}</div> : null}
                {statusApp ==="loading" && <Preloader/>}
                <NavLink to={"/login"}>Sign in</NavLink>
            </form>
        </div>
    )
}

export default Registration