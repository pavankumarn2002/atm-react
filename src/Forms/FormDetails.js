import React from "react";
import Form from "./Form";
import Editing from "./Editing";
import { useNavigate } from "react-router-dom";
import Practice from "./Practice";
const FormDetails=()=>{
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
return(
    <div className="">
         <button className="btn btn-primary" onClick={navigateTo}>Back</button>
         <h1><u>Simple Form</u> :-</h1>
      <Form/><br></br>
      <h1><u>Adding & Egiting</u> :-</h1>
      <Editing/><br></br>
      <h1><u>Practice</u> :-</h1>
      <Practice/>
    </div>
)
}
export default FormDetails