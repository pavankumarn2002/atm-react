import React from "react";
import Counter from "./Counter";
import StateWithObject from "./StateWithObject";
import StateWithArray from "./StateWithArray";
import Toggle from "./Toggle";
import { useNavigate } from "react-router-dom";
const StateHook = () => {
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
    return (
        <div className="">
        <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1><u>Use State Hook</u> :-</h1><br></br>
            <h5>Example :- 1</h5>
            <Counter /><br></br>
            <h5>Example :- 2</h5>
            <StateWithObject /><br></br>
            <h5>Example :- 3</h5>
            <StateWithArray /><br></br>
            <h5>Example :- 4</h5>
            <Toggle /><br></br>
        </div>
    )
}
export default StateHook