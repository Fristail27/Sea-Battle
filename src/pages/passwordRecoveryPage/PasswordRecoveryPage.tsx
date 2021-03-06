import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onChangeInputAC, onChangeStatusPassRecAC, sendEmailForRecoveryPassTC, setErrorStatusForPassRecAC} from "../../store/passwordRecovery-Reducer";
import {AppRootStateType} from "../../store/store";


const PasswordRecoveryPage = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, string>(state => state.pass.valueOfInputEmail)
    const errorStatus = useSelector<AppRootStateType, string|null>(state => state.pass.errorStatusForPassRec)
    const status = useSelector<AppRootStateType, string>(state => state.pass.statusForPassRec)

    const clickHandler = ()=> {
        dispatch(sendEmailForRecoveryPassTC(value))
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeInputAC(e.currentTarget.value))
        if (errorStatus) {
            dispatch(setErrorStatusForPassRecAC(null))
        }
        if (status !== "none") {
            dispatch(onChangeStatusPassRecAC("none"))
        }
    }
    return (
        <div>
            <h1>Password Recovery Page</h1>
            {status !== "none" && <span>{status}</span>}
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={clickHandler}>Send email</button>
            {errorStatus && <p style={{color:"red"}}>{errorStatus}</p>}
        </div>
    )
}

export default PasswordRecoveryPage

