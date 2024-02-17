import React,{useState} from "react"
const StateWithObject =()=>{
    const initialObj={
        firstName:"emmo",
        lastName:"watson",
        age:"27"
    }
    const [data,setData]=useState(initialObj);
    const changeFirstName=()=>{
        setData({...data,firstName:"Srikanth"})
    }
    const changeLastName=()=>{
        setData({...data,lastName:"Racherla"})
    }
    return(
        <div className="">
            <p>{data.firstName}</p>
            <button className="btn btn-primary" onClick={changeFirstName}>Change First Name</button>
            <p>{data.lastName}</p>
            <button className="btn btn-primary" onClick={changeLastName}>Change Last Name</button>
            <p>{data.age}</p>
        </div>
    )
}
export default StateWithObject;