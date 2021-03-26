import React from "react";
import { NavLink } from "react-router-dom";


const Main = () => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
            {/*<NavLink to={'/new-password-page'}>New password</NavLink>*/}
            <NavLink to={'/password-recovery-page'}>Password recovery</NavLink>
            <NavLink to={'/test-page'}>Test page</NavLink>
            <NavLink to={'/error404'}>Error 404</NavLink>
            <NavLink to={'/packs'}>Packs</NavLink>
            <NavLink to={'/cards'}>Cards</NavLink>
        </div>
    )
}

export default Main