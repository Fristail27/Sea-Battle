import React from "react";
import {useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {AppRootStateType} from "../../store/store";


const Profile = () => {
    const profName = useSelector<AppRootStateType, string | null>(state => state.auth.userData ?  state.auth.userData.name : null)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    if(!isAuth) {
        return <Redirect to={'/'}/>
    }
    return (
        <h1>profile {profName}</h1>
    )
}

export default Profile