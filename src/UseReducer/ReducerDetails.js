import React from "react";
import StateManage from "./StateManag";
import ManageApi from "./ManageApi";
import Practice from "./Practice";
import { useNavigate } from "react-router-dom";

const ReducerDetails = () => {
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
    return (
        <div className="">
        <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1><u>Use Reducer</u> :-</h1>
            <h5>Example :- 1(With Out Api)</h5>
            <StateManage /><br></br>
            <h5>Example :- 2(With API)</h5>
            <ManageApi /><br></br>
            <h5>Practice :-(With API)</h5>
            <Practice /><br></br>
        </div>
    )
}
export default ReducerDetails