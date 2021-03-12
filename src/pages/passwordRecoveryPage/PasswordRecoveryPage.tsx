import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {onChangeInputAC, sendEmailForRecoveryPassTC, setErrorStatusForPassRecAC} from "../../store/passwordRecovery-Reducer";
import {AppRootStateType} from "../../store/store";
import {EmailInput} from "../../common/EmailInput";
import {Button} from "../../common/Button";
import s from "../registration/Registration.module.css";
import {validations} from "../../utils/validations/validations";
import {Preloader} from "../../common/preloader/Preloader";
import {RequestStatusType} from "../../store/app-Reducer";


const PasswordRecoveryPage = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, string>(state => state.pass.valueOfInputEmail)
    const emailValid =  validations.emailValid(value)
    const errorStatus = useSelector<AppRootStateType, string|null>(state => state.pass.errorStatusForPassRec)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)

    const clickHandler = ()=> {
        emailValid
            ? dispatch(setErrorStatusForPassRecAC("Некоректный Email"))
            : dispatch(sendEmailForRecoveryPassTC(value))
    }
    const onChangeHandler = (email: string) => {
        dispatch(onChangeInputAC(email))
    }

    return (
        <div>
            <h1>Password Recovery Page</h1>
            <form className={s.registrationForm} onSubmit={(e) => e.preventDefault()}>
                <EmailInput email={value} onChange={onChangeHandler}/>
                <Button name={"Send email"} onClick={clickHandler} status={statusApp}/>
                {errorStatus && <p style={{color:"red"}}>{errorStatus}</p>}
            </form>
            {statusApp ==="loading" && <Preloader/>}
            {statusApp === "succeeded" && <span style={{color:"green"}}>{statusApp}</span>}
        </div>
    )
}

export default PasswordRecoveryPage

