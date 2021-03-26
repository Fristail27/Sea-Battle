import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendEmailForRecoveryPassTC} from "../../store/passwordRecovery-Reducer";
import {AppRootStateType} from "../../store/store";
import {EmailInput} from "../../common/EmailInput";
import {Button} from "../../common/Button";
import s from "../registration/Registration.module.css";
import {validations} from "../../utils/validations/validations";
import {RequestStatusType} from "../../store/app-Reducer";


const PasswordRecoveryPage = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const [error, setError] = useState<string>("")

    const clickHandler = () => {
        if (email) {
            if (!validations.emailValid(email)) {
                dispatch(sendEmailForRecoveryPassTC(email))
            } else {
                setError("incorrect email")
            }
        } else {
            setError("required email")
        }
    }

    return (
        <div>
            <h1>Password Recovery Page</h1>
            <form className={s.registrationForm} onSubmit={(e) => e.preventDefault()}>
                <EmailInput email={email} onChange={setEmail}/>
                <Button name={"Send email"} onClick={clickHandler} status={statusApp}/>
                {error && <p style={{color:"red"}}>{error}</p>}
            </form>
        </div>
    )
}

export default PasswordRecoveryPage

