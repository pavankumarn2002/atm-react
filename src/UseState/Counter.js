import React,{useState} from "react"
const Counter=()=>{
 const [count,setCount]=useState(0);
 const decrement=()=>{
      setCount(count-1)
 }
 const increment=()=>{
    setCount(count+1)
 }
 return(
    <div className="counter">
        <button className="btn btn-danger" onClick={decrement}>Decriment</button>
        <span>{count}</span>
        <button className="btn btn-warning" onClick={increment}>Incriment</button>
    </div>
 )
}
export default Counter;