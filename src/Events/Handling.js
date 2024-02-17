import React from "react";
import EventHandling from "./EventHandling";
import { useNavigate } from "react-router-dom";
const Handling = () => {
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
    return (
        <div className="container">
            <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1><u>Event Handling</u> :-</h1>
            <EventHandling message="Playing!" /><br></br>
            <EventHandling message="Uploading!" /><br></br>
        </div>
    )
}
export default Handling