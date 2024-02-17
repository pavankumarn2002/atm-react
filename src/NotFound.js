import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound=()=>{
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
   return(
    <div className="">
        <h5>404 Not Found</h5>
        <button className="btn btn-primary" onClick={navigateTo}>Back</button>
    </div>
   )
}
export default NotFound