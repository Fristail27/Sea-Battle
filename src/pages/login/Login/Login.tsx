import React from "react";


export const Login = () => {
    return (
        <div>
            <h1>Authentication</h1>
            <form>
                <div>
                    <span>Email</span>
                    <input type='email' placeholder="Entry email"/>
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" placeholder="Entry password"/>
                </div>
                <div>
                    <span>Remember me</span>
                    <input type="radio"/>
                </div>
                <button>Login</button>
            </form>
        </div>

    )
}