import React from "react";
import {passwordRecoveryAPI} from "../../api/PasswordRecoveryAPI";


const PasswordRecoveryPage = () => {
    const clickHandler = ()=> {
        const req = passwordRecoveryAPI.sendEmailForChangePassword()
        req.then(console.log)
    }
    return (
        <div>
            <h1>Password Recovery Page</h1>
            <input />
            <button onClick={clickHandler}>Send email</button>
        </div>
    )
}

export default PasswordRecoveryPage

