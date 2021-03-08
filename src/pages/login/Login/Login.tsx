import React, {ChangeEvent} from "react";
import style from "./Login.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {RequestStatusType} from "../../../store/reg-Reducer";
import {Preloader} from "../../common/preloader/Preloader";

type LoginPropsType = {
    emailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    passwordHandler: (e: ChangeEvent<HTMLInputElement>) => void
    checkHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onSubm: () => void
    email: string
    password: string
    check: boolean

}

export const Login = (props: LoginPropsType) => {
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
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
                    <input onChange={props.passwordHandler} type="password" placeholder="Entry password"
                           value={props.password}/>
                </div>
                <div className={style.elementInput}>
                    <span>Remember me</span>
                    <input onChange={props.checkHandler} type="checkbox" checked={props.check}/>
                </div>
                <button onClick={props.onSubm} type={"submit"}>Login</button>
            </form>
            {statusApp === "loading" && <Preloader/>}
        </div>
    )
}