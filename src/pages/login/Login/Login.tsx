import React, {ChangeEvent} from "react";
import style from "./Login.module.css"

type LoginPropsType ={
    emailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    passwordHandler: (e: ChangeEvent<HTMLInputElement>) => void
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
            <form className={style.formLogin}>
                <div className={style.elementInput}>
                    <span>Email</span>
                    <input onChange={props.emailHandler} type='email' placeholder="Entry email" value={props.email}/>
                </div>
                <div className={style.elementInput}>
                    <span>Password</span>
                    <input onChange={props.passwordHandler} type="password" placeholder="Entry password" value={props.password}/>
                </div>
                <div className={style.elementInput}>
                    <span>Remember me</span>
                    <input onChange={props.checkHandler} type="checkbox" checked={props.check}/>
                </div>
                <button onClick={props.onSubm} type={"submit"} >Login</button>
            </form>
        </div>

    )
}