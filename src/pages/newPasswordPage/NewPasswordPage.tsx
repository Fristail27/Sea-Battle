import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useParams} from "react-router-dom";
import {AppRootStateType} from "../../store/store";
import {
    onChangeInputPassAC,
    onChangeInputPassRecAC,
    onChangeStatusNewPassAC,
    sendPassForNewPassTC,
    setErrorStatusForNewPassAC
} from "../../store/passwordRecovery-Reducer";

const NewPasswordPage = () => {

    const dispatch = useDispatch()
    const [redirect, setRedirect] = React.useState<boolean>(false)
    const errorStatus = useSelector<AppRootStateType, string | null>(state => state.pass.errorStatusForNewPass)
    const valuePass = useSelector<AppRootStateType, string>(state => state.pass.valueInputPass)
    const valuePassRepeat = useSelector<AppRootStateType, string>(state => state.pass.valueInputPassRec)
    const status = useSelector<AppRootStateType, string>(state => state.pass.statusForNewPass)
    const {token} = useParams<{ token?: string }>();

    const onChangeHandlerPass = (e: ChangeEvent<HTMLInputElement>) => {
        if (errorStatus) {
            dispatch(setErrorStatusForNewPassAC(null))
        }
        dispatch(onChangeInputPassAC(e.currentTarget.value))
    }
    const onChangeHandlerPassRepeat = (e: ChangeEvent<HTMLInputElement>) => {
        if (errorStatus) {
            dispatch(setErrorStatusForNewPassAC(null))
        }
        if (status !== "none") {
            dispatch(onChangeStatusNewPassAC("none"))
        }
        dispatch(onChangeInputPassRecAC(e.currentTarget.value))
    }

    const clickHandler = () => {
        if (valuePass !== valuePassRepeat) {
            dispatch(setErrorStatusForNewPassAC("Пароли не совпадают"))
        } else {
            if (token) {dispatch(sendPassForNewPassTC(valuePass, token))}
            setRedirect(true)
        }
    }

    return (
        <div>
            {redirect && <Redirect to={"/"}/>}
            <h1>New Password Page</h1>
            {status !== "none" && <span>{status}</span>}
            <label style={{display: "block"}}><input value={valuePass} onChange={onChangeHandlerPass} type="text"/>Password</label>
            <label style={{display: "block"}}><input value={valuePassRepeat} onChange={onChangeHandlerPassRepeat} type="text"/>repeat Password</label>
            {errorStatus && <span style={{color: "red"}}>{errorStatus}</span>}
            <button onClick={clickHandler}>Change Pass</button>
        </div>
    )
}

export default NewPasswordPage