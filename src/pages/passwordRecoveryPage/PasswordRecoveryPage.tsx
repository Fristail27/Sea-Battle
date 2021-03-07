import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onChangeInputAC, sendEmailForRecoveryPassTC, setErrorStatusForPassRecAC} from "../../store/passwordRecovery-Reducer";
import {AppRootStateType} from "../../store/store";
import {validations} from "../../utils/validations/validations";
import {Preloader} from "../common/preloader/Preloader";
import {onChangeAppStatusAC} from "../../store/app-Reducer";


const PasswordRecoveryPage = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, string>(state => state.pass.valueOfInputEmail)
    const emailValid =  validations.emailValid(value)
    const errorStatus = useSelector<AppRootStateType, string|null>(state => state.pass.errorStatusForPassRec)
    const statusApp = useSelector<AppRootStateType, string>(state => state.app.appStatus)
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
        if (statusApp !== "idle") {
            dispatch(onChangeAppStatusAC("idle"))
        }
        if (touched) {
            setTouched(false)
        }
    }
    const onBlurHandler = () => {
        if (emailValid) {
            dispatch(setErrorStatusForPassRecAC("Некоректный Email"))
            setTouched(true)
            dispatch(onChangeAppStatusAC("idle"))
        } else {
            dispatch(setErrorStatusForPassRecAC(null))
        }
    }
    const errorStyle = (emailValid && touched) ? {border: "2px solid red"} : {}

    return (
        <div>
            <h1>Password Recovery Page</h1>
            <input onFocus={()=> setTouched(true)} style={errorStyle} onBlur={onBlurHandler} value={value} onChange={onChangeHandler}/>
            <button disabled={statusApp === "loading"} onClick={clickHandler}>Send email</button>
            {errorStatus && <p style={{color:"red"}}>{errorStatus}</p>}
            {statusApp ==="loading" && <Preloader/>}
            {statusApp === "succeeded" && <span style={{color:"green"}}>{statusApp}</span>}
        </div>
    )
}

export default PasswordRecoveryPage

