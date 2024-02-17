import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
    const { login } = useAuth()
    const [userName, setUserName] = useState("")
    const changeEvent = (e) => {
        setUserName(e.target.value)
    }
    let navigate = useNavigate()
    const navigateTo = () => {
        navigate('/', { replace: true })
    }
    return (
        <div className="content">
            <div className="login-content">
                <h1>Log In Page</h1>
                <input tupe="text" name="userName" id="userName" placeholder="Enter Name" value={userName} onChange={(e) => changeEvent(e)} />
                <button className="btn btn-primary" onClick={() => {
                    login(userName);
                    navigateTo()
                }}>Login</button>
            </div>
        </div>
    )
}
export default LogIn