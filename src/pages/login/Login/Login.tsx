import React, {ChangeEvent} from "react";
import style from "./Login.module.css"
import s from "../../registration/Registration.module.css";
import {EmailInput} from "../../../common/EmailInput";
import {PassInput} from "../../../common/PassInput";
import {Button} from "../../../common/Button";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {RequestStatusType} from "../../../store/app-Reducer";
import {ModalError} from "../../../common/modalWindow/modalError";

type LoginPropsType = {
    emailHandler: (email: string) => void
    passwordHandler: (pass: string) => void
    checkHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
    email: string
    password: string
    check: boolean
    error: string
}

export const Login = (props: LoginPropsType) => {

    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)

    return (
        <div>
            <h1>Authentication</h1>
            <form className={s.registrationForm} onSubmit={(e) => e.preventDefault()}>
                <EmailInput email={props.email} onChange={props.emailHandler}/>
                <PassInput password={props.password} onChange={props.passwordHandler}/>
                <div className={style.elementInput}>
                    <span>Remember me</span>
                    <input onChange={props.checkHandler} type="checkbox" checked={props.check}/>
                </div>
                <Button name={"Login"} onClick={props.onSubmit} status={statusApp}/>
                {props.error && <div style={{marginTop:"170px"}} className={s.error}>{props.error}</div>}
            </form>
            <ModalError/>
        </div>
    )
}