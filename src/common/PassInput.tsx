import s from "./Input.module.css";
import React, {ChangeEvent, useState} from "react";

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
    }
    const onPassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (password.length < 7) {
            setPasswordErr('Password must be more than 7 characters')
        } else {
            setPasswordErr('')
        }
        onChange(e.currentTarget.value.trim())
    }
    console.log(password)


    return (
        <div>
            <input className={passwordErr && s.error} onFocus={() => setPasswordErr('')} value={password}
                   onBlur={onBlurPass} onChange={onPassChangeHandler} placeholder="Password" type={"password"}/>
            {passwordErr && <div className={s.inputErr} style={{marginTop: "-3px"}}>{passwordErr}</div>}
        </div>
    )
}