import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useParams} from "react-router-dom";
import {AppRootStateType} from "../../store/store";
import {
    onChangeInputPassAC,
    onChangeInputPassRecAC,
    sendPassForNewPassTC,
    setErrorStatusForNewPassAC
} from "../../store/passwordRecovery-Reducer";
import {validations} from "../../utils/validations/validations";
import {onChangeAppStatusAC} from "../../store/app-Reducer";
import {Preloader} from "../common/preloader/Preloader";

const NewPasswordPage:React.FC = () => {

    const dispatch = useDispatch()
    const [redirect, setRedirect] = React.useState<boolean>(false)
    const [touchedPass, setTouchedPass] = React.useState<boolean>(false)
    const [touchedPassRepeat, setTouchedPassRepeat] = React.useState<boolean>(false)
    const errorStatus = useSelector<AppRootStateType, string | null>(state => state.pass.errorStatusForNewPass)
    const valuePass = useSelector<AppRootStateType, string>(state => state.pass.valueInputPass)
    const passValid = validations.passValid(valuePass)
    const valuePassRepeat = useSelector<AppRootStateType, string>(state => state.pass.valueInputPassRec)
    const passRepeatValid = validations.passValid(valuePassRepeat)
    const statusApp = useSelector<AppRootStateType, string>(state => state.app.appStatus)
    const {token} = useParams<{ token?: string }>();

    const onChangeHandlerPass = (e: ChangeEvent<HTMLInputElement>) => {
        if (errorStatus) {
            dispatch(setErrorStatusForNewPassAC(null))
        }
        if (touchedPass || touchedPassRepeat) {
            setTouchedPass(false)
            setTouchedPassRepeat(false)
        }
        dispatch(onChangeInputPassAC(e.currentTarget.value))
    }
    const onChangeHandlerPassRepeat = (e: ChangeEvent<HTMLInputElement>) => {
        if (errorStatus) {
            dispatch(setErrorStatusForNewPassAC(null))
        }
        if (statusApp !== "idle") {
            dispatch(onChangeAppStatusAC("idle"))
        }
        if (touchedPass || touchedPassRepeat) {
            setTouchedPass(false)
            setTouchedPassRepeat(false)
        }
        dispatch(onChangeInputPassRecAC(e.currentTarget.value))
    }

    const clickHandler = () => {
        if (valuePass !== valuePassRepeat) {
            dispatch(setErrorStatusForNewPassAC("Пароли не совпадают"))
        } else if (validations.passValid(valuePass)) {
            dispatch(setErrorStatusForNewPassAC("Длина пароля должна быть больше 7 символов"))
        } else {
            if (token) {
                dispatch(sendPassForNewPassTC(valuePass, token))
            }
            if (statusApp === "succeeded") {
                setRedirect(true)
                dispatch(onChangeAppStatusAC("idle"))
            }
        }
    }
    const errorStylePass = (passValid && touchedPass) ? {border: "2px solid red"} : {}
    const errorStylePassRepeat = (passRepeatValid && touchedPassRepeat) ? {border: "2px solid red"} : {}

    const onBlurHandlerPass = () => {
        if (passValid) {
            dispatch(setErrorStatusForNewPassAC("Некоректный пароль"))
            setTouchedPass(true)
            setTouchedPassRepeat(true)
        } else {
            dispatch(setErrorStatusForNewPassAC(null))
        }
    }
    const onBlurHandlerPassRepeat = () => {
        if (passRepeatValid) {
            dispatch(setErrorStatusForNewPassAC("Некоректный пароль"))
            setTouchedPass(true)
            setTouchedPassRepeat(true)
        } else {
            dispatch(setErrorStatusForNewPassAC(null))
        }
    }

    return (
        <div>
            {redirect && <Redirect to={"/login"}/>}
            <h1>New Password Page</h1>
            <label style={{display: "block"}}><input onBlur={onBlurHandlerPass} onFocus={() => setTouchedPass(true)}
                                                     style={errorStylePass} value={valuePass}
                                                     onChange={onChangeHandlerPass} type="text"/>Password</label>
            <label style={{display: "block"}}><input onBlur={onBlurHandlerPassRepeat}
                                                     onFocus={() => setTouchedPassRepeat(true)}
                                                     style={errorStylePassRepeat} value={valuePassRepeat}
                                                     onChange={onChangeHandlerPassRepeat} type="text"/>repeat Password</label>
            {errorStatus && <span style={{color: "red"}}>{errorStatus}</span>}
            <button disabled={statusApp === "loading"} onClick={clickHandler}>Change Pass</button>
            {statusApp ==="loading" && <Preloader/>}
            {statusApp === "succeeded" && <span style={{color:"green"}}>{statusApp}</span>}
        </div>
    )
}

export default NewPasswordPage