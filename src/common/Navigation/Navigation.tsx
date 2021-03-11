import React from "react";
import {Link, NavLink} from "react-router-dom";
import styles from "./Navigation.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {authTryAC, initialState} from "../../store/auth-Reducer";
import {onChangeAppStatusAC} from "../../store/app-Reducer";

export const Navigations = () => {
    const dispatch = useDispatch()
    const authorized = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const authHandler = () => {
        if(authorized) {
            dispatch(authTryAC(initialState.userData, false))
            dispatch(onChangeAppStatusAC("idle"))
        }
    }
    const text = authorized ? "/" : "/login"
    return (
        <div className={styles.wrapper}>
            <nav className={styles.navigation}>
                <Link to={"/"}>Home</Link>
                <Link to={"/profile"}>Profile</Link>
            </nav>
            <NavLink to={text}><button onClick={authHandler}>{authorized ? <span>Logout</span>: <span>Login</span>}</button></NavLink>
        </div>
    )
}