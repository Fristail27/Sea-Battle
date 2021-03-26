import React, {useEffect} from "react";
import s from "./modalError.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setErrorAC} from "../../store/app-Reducer";

export const ModalError = () => {

    const error = useSelector<AppRootStateType, string | undefined>(state => state.app.error)
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            setTimeout(() => dispatch(setErrorAC('')), 3000)
        }
    }, [error, dispatch])

    return (
        <div>
            {error && <div className={s.modalWindow}>{error}</div>}
        </div>
    )
}