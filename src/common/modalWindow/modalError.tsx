import React, {useEffect} from "react";
import s from "./modalError.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setErrorAC} from "../../store/reg-Reducer";

export const ModalError = () => {

    const error = useSelector<AppRootStateType, string | undefined>(state => state.reg.error)
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            setTimeout(() => dispatch(setErrorAC('')), 3000)
        }
    }, [error])

    return (
        <div>
            {error && <div className={s.modalWindow}>
                {error}
            </div>}
        </div>
    )
}