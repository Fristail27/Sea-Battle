import React, {ChangeEvent, useEffect, useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import s from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {registerAC, registerTC} from "../../store/reg-Reducer";
import {onChangeAppStatusAC, RequestStatusType} from "../../store/app-Reducer";
import {EmailInput} from "../../common/EmailInput";
import {PassInput} from "../../common/PassInput";
import {Button} from "../../common/Button";
import {validations} from "../../utils/validations/validations";
import {ModalError} from "../../common/modalWindow/modalError";

const Registration = () => {

    const dispatch = useDispatch()
    const succeedRegister = useSelector<AppRootStateType, boolean>(state => state.reg.succeedRegister)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const [error, setError] = useState<string>("")

    useEffect(() => {
        if (succeedRegister) {
            setTimeout(() => dispatch(registerAC(false)), 1000)
        }
        if (error) {
            setTimeout(() => setError(""), 3000)
        }
    }, [succeedRegister, error, dispatch])

    const onRepeatPassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.currentTarget.value)
        if (statusApp !== "idle") {
            dispatch(onChangeAppStatusAC("idle"))
        }
    }
    const onButtonClick = () => {
        if (email && password) {
            if (password === repeatPassword && !validations.emailValid(email)) {
                dispatch(registerTC({email, password}))
            } else {
                setError("incorrect email or password")
            }
        } else {
            setError("required email and password")
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
                <div>
                    <input value={repeatPassword} onChange={onRepeatPassChangeHandler}
                           placeholder="Repeat password" type={"password"}/>
                    {password !== repeatPassword ? <div className={s.error}>Different Password</div> : ""}
                </div>
                <Button name={"Register"} onClick={onButtonClick} status={statusApp}/>
                {error && <div style={{marginTop:"165px"}} className={s.error}>{error}</div>}
                <NavLink to={"/login"}>Sign in</NavLink>
            </form>
            <ModalError/>
        </div>
    )
}

export default Registration