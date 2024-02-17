import React from "react";
import CustomCounter from "./CustomCounter";
import CustomApi from "./CustomApi";
import PostApi from "./PostApi";
import { useNavigate } from "react-router-dom";
const CustomDetails = () => {
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
    return (
        <div className="">
            <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1><u>Custom Hook</u> :-</h1>
            <h5>Example :-1(With out API)</h5>
            <CustomCounter /><br></br>
            <h5>Example :-2(With API)</h5>
            <CustomApi /><br></br>
            <h5>Example :-3(With API)</h5>
            <PostApi /><br></br>
        </div>
    )
}
export default CustomDetails