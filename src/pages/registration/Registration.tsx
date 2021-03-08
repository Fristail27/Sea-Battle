import React, {ChangeEvent, useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import s from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {registerTC, RequestStatusType} from "../../store/reg-Reducer";
import {Preloader} from "../common/preloader/Preloader";
import {onChangeAppStatusAC} from "../../store/app-Reducer";
import {EmailInput} from "../../common/EmailInput";
import {PassInput} from "../../common/PassInput";
import {Button} from "../../common/Button";

const Registration = () => {

    const dispatch = useDispatch()
    const succeedRegister = useSelector<AppRootStateType, boolean>(state => state.reg.succeedRegister)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const error = useSelector<AppRootStateType, string | undefined>(state => state.reg.error)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const [sendError, setSendError] = useState<string>("")

    const onRepeatPassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.currentTarget.value)
        if (statusApp !== "idle") dispatch(onChangeAppStatusAC("idle"))
    }
    const onButtonClick = () => {
        if (email && password) {
            if (password === repeatPassword) {
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
                <EmailInput email={email} onChange={setEmail}/>
                <PassInput password={password} onChange={setPassword}/>
                <input value={repeatPassword} onChange={onRepeatPassChangeHandler}
                       placeholder="Repeat password" type={"password"}/>
                {password !== repeatPassword ? <div style={{color:"red"}}>Different Password</div> : ""}
                <Button name={"Register"} onClick={onButtonClick} status={statusApp}/>
                {sendError && <div style={{color:"red"}} >{sendError}</div>}
                {error && <div style={{color:"red"}}>{error}</div>}
                {statusApp ==="loading" && <Preloader/>}
                <NavLink to={"/login"}>Sign in</NavLink>
            </form>
        </div>
    )
}

export default Registration