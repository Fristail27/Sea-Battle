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
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)

    const authHandler = () => {
        if (isAuth) {
            dispatch(logoutTC())
            dispatch(onChangeAppStatusAC("idle"))
        }
    }
    const text = isAuth ? "/profile" : "/login"

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    {/*<Link to={"/"}>Home</Link>*/}
                    <Link to={"/"}>Profile</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/registration'}>Registration</Link>
                    {/*<Link to={'/new-password-page'}>New password</Link>*/}
                    <Link to={'/password-recovery-page'}>Password recovery</Link>
                    <Link to={'/test-page'}>Test page</Link>
                    {/*<Link to={'/error404'}>Error 404</Link>*/}
                    <Link to={'/packs'}>Packs</Link>
                    <Link to={'/cards'}>Cards</Link>
                </nav>
                <NavLink to={text}>
                    <button onClick={authHandler}>{isAuth ? "Logout" : "Login"}</button>
                </NavLink>
            </div>
            {appStatus ==="loading" && <PreloaderForNav/>}
        </div>
    )
}