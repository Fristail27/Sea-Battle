import s from "./Input.module.css";
import React, {ChangeEvent, useState} from "react";
import {validations} from "../utils/validations/validations";

type PassInputPropsType = {
    password: string
    onChange: (pass: string) => void
}

export const PassInput: React.FC<PassInputPropsType> = ({password, onChange}) => {

    const [passwordErr, setPasswordErr] = useState<string>("")

    const onBlurPass = () => {
        if (password.trim() === "") {
            setPasswordErr('Password Required')
        }
        if (password) {
            if (validations.passValid(password)) {
                setPasswordErr('Password must be more than 7 characters')
            } else {
                setPasswordErr('')
            }
        }
    }
    const onPassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value.trim())
    }

    return (
        <div>
            <div>
                <input className={passwordErr && s.error} onFocus={() => setPasswordErr('')} value={password}
                       onBlur={onBlurPass} onChange={onPassChangeHandler} placeholder="Password" type={"password"}/>
            </div>
            {passwordErr && <div className={s.inputErr} style={{marginTop: "-3px"}}>{passwordErr}</div>}
        </div>
    )
}