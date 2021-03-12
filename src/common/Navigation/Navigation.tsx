import React from "react";
import {Link, NavLink} from "react-router-dom";
import styles from "./Navigation.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {logoutTC} from "../../store/auth-Reducer";
import {onChangeAppStatusAC, RequestStatusType} from "../../store/app-Reducer";
import {PreloaderForNav} from "../preloaderForNav/PreloaderForNav";

export const Navigations = () => {
    const dispatch = useDispatch()
    const authorized = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const authHandler = () => {
        if (authorized) {
            dispatch(logoutTC())
            dispatch(onChangeAppStatusAC("idle"))
        }
    }
    const text = authorized ? "/" : "/login"
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/profile"}>Profile</Link>
                </nav>
                <NavLink to={text}>
                    <button onClick={authHandler}>{authorized ? <span>Logout</span> : <span>Login</span>}</button>
                </NavLink>
            </div>
            {statusApp ==="loading" && <PreloaderForNav/>}
        </div>
    )
}