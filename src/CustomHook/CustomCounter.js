import React from "react";
import { useCounter } from "./useCounter";
const CustomCounter=()=>{
    const [counter,increment,decrement,reset]=useCounter()
    return(
        <div className="">
            <h5>Counter : {counter}</h5>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-primary" onClick={decrement}>Decrement</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    )
}
export default CustomCounter