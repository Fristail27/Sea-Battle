import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Registration.module.css"

const Registration = () => {
    return (
        <div className={s.registrationModule}>
            <h1>Registration</h1>
            <form className={s.registrationForm}>
                <input className='email' name="email" placeholder="Email" type={"email"}/>
                <input data-validate-length="6,8" name="password"  placeholder="Password" type={"password"}/>
                <input data-validate-length="6,8" name="password"  placeholder="Repeat password" type={"password"}/>
                <button>Register</button>
                <NavLink to={"/login"}>Sign in</NavLink>
            </form>
        </div>
    )
}

export default Registration