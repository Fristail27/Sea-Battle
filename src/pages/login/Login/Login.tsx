import React, {ChangeEvent} from "react";
import style from "./Login.module.css"
import s from "../../registration/Registration.module.css";
import {EmailInput} from "../../../common/EmailInput";
import {PassInput} from "../../../common/PassInput";
import {Button} from "../../../common/Button";
import {NavLink} from "react-router-dom";

type LoginPropsType = {
    emailHandler: (email: string) => void
    passwordHandler: (pass: string) => void
    checkHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onSubm: () => void
    email: string
    password: string
    check: boolean

}

export const Login = (props: LoginPropsType) => {
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
                <Button name={"Login"} onClick={props.onSubm} status={"idle"}/>
            </form>
        </div>
    )
}