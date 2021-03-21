import s from "./Input.module.css";
import React, {ChangeEvent, useState} from "react";
import {validations} from "../utils/validations/validations";

type EmailInputPropsType = {
    email: string
    onChange: (email: string) => void
}

export const EmailInput: React.FC<EmailInputPropsType> = ({email, onChange}) => {

    const [emailErr, setEmailErr] = useState<string>("")

    const onBlurEmail = () => {
        if (email.trim() === "") {
            setEmailErr('Email Required')
            onChange("")
        }
        if (email) {
            if (validations.emailValid(email)) {
                setEmailErr('Invalid email address')
            } else {
                setEmailErr('')
            }
        }
    }
    const onMailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <input className={emailErr && s.error} onFocus={() => setEmailErr('')} value={email}
                       onBlur={onBlurEmail} onChange={onMailChangeHandler} placeholder="Email" type={"email"}/>
            </div>
            {emailErr && <div className={s.inputErr} style={{marginTop: "-3px"}}>{emailErr}</div>}
        </div>
    )
}