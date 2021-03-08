import s from "./Input.module.css";
import React, {ChangeEvent, useState} from "react";

type EmailInputPropsType = {
    email: string
    onChange: (email: string) => void
}

export const EmailInput: React.FC<EmailInputPropsType> = ({email, onChange}) => {

    const [emailErr, setEmailErr] = useState<string>("")

    const onBlurEmail = () => {
        if (email.trim() === "") {
            setEmailErr('Email Required')
        }
    }
    const onMailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailErr('Invalid email address')
        } else {
            setEmailErr('')
        }
        onChange(e.currentTarget.value.trim())
    }

    return (
        <div>
            <input className={emailErr && s.error} onFocus={() => setEmailErr('')} value={email}
                   onBlur={onBlurEmail} onChange={onMailChangeHandler} placeholder="Email" type={"email"}/>
            {emailErr && <div className={s.inputErr} style={{marginTop: "-3px"}}>{emailErr}</div>}
        </div>
    )
}