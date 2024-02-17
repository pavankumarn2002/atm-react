import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useApi } from "../CustomHook/useApi";

const URL = "https://jsonplaceholder.typicode.com/users"
const UserDetails=()=>{
    const [userData] = useApi(URL)
    const params=useParams()

    const userDetails=userData?.find((res)=>{
        return res.id===parseInt(params.userId)
    })
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/userData')
    }
     return(
        <div className="">
            <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h3>User Details</h3>
            <h5>{userDetails?.name}</h5>
            <p>{userDetails?.email}</p>
        </div>
     )
}
export default UserDetails