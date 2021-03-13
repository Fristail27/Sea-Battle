import React from "react";
import { NavLink } from "react-router-dom";


const Main = () => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>registration</NavLink>
            <NavLink to={'/new-password-page'}>new-password-page</NavLink>
            <NavLink to={'/password-recovery-page'}>password-recovery-page</NavLink>
            <NavLink to={'/test-page'}>test-page</NavLink>
            <NavLink to={'/error404'}>error404</NavLink>
            <NavLink to={'/packs'}>Packs</NavLink>
            <NavLink to={'/cards'}>Cards</NavLink>
        </div>
    )
}

export default Main