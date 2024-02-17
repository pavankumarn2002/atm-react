import React from "react";
import EmployeeDetails from "./EmployeeDetails";
import UserDetails from "./UserDetails";
import { useNavigate } from "react-router-dom";
const ContextDetails = () => {
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
    return (
        <div className=" ">
            <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1><u>Local Use Context</u> :-</h1>
            <EmployeeDetails />
            <h1><u>Global Use Context</u> :-</h1>
            <UserDetails />
        </div>
    )
}
export default ContextDetails