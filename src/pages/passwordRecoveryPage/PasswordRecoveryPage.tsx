import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onChangeInputAC, onChangeStatusPassRecAC, sendEmailForRecoveryPassTC, setErrorStatusForPassRecAC} from "../../store/passwordRecovery-Reducer";
import {AppRootStateType} from "../../store/store";
import {validations} from "../../utils/validations/validations";


const PasswordRecoveryPage = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, string>(state => state.pass.valueOfInputEmail)
    const emailValid =  validations.emailValid(value)
    const errorStatus = useSelector<AppRootStateType, string|null>(state => state.pass.errorStatusForPassRec)
    const status = useSelector<AppRootStateType, string>(state => state.pass.statusForPassRec)
    const [touched, setTouched] = React.useState<boolean>(false)

    const clickHandler = ()=> {
        emailValid
            ? dispatch(setErrorStatusForPassRecAC("Некоректный Email"))
            : dispatch(sendEmailForRecoveryPassTC(value))
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeInputAC(e.currentTarget.value))
        if (errorStatus) {
            dispatch(setErrorStatusForPassRecAC(null))
        }
        if (status !== "none") {
            dispatch(onChangeStatusPassRecAC("none"))
        }
        if (touched) {
            setTouched(false)
        }
    }
    const onBlurHandler = () => {
        if (emailValid) {
            dispatch(setErrorStatusForPassRecAC("Некоректный Email"))
            setTouched(true)
        } else {
            dispatch(setErrorStatusForPassRecAC(null))
        }
    }
    const errorStyle = (emailValid && touched) ? {border: "2px solid red"} : null
    return (
        <div>
            <h1>Password Recovery Page</h1>
            {status !== "none" && <span>{status}</span>}
            <input onFocus={()=> setTouched(true)} style={errorStyle as any} onBlur={onBlurHandler} value={value} onChange={onChangeHandler}/>
            <button onClick={clickHandler}>Send email</button>
            {errorStatus && <p style={{color:"red"}}>{errorStatus}</p>}
        </div>
    )
}

export default PasswordRecoveryPage

