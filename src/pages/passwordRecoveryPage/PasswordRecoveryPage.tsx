import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onChangeInputAC, sendEmailForRecoveryPassTC, setErrorStatusAC} from "../../store/passwordRecovery-Reducer";
import {AppRootStateType} from "../../store/store";


const PasswordRecoveryPage = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, string>(state => state.pass.valueOfInputEmail)
    const errorStatus = useSelector<AppRootStateType, string|null>(state => state.pass.errorStatus)

    const clickHandler = ()=> {
        dispatch(sendEmailForRecoveryPassTC(value))
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeInputAC(e.currentTarget.value))
        if (errorStatus) {
            dispatch(setErrorStatusAC(null))
        }
    }
    return (
        <div>
            <h1>Password Recovery Page</h1>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={clickHandler}>Send email</button>
            {errorStatus && <p style={{color:"red"}}>{errorStatus}</p>}
        </div>
    )
}

export default PasswordRecoveryPage

