import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";

const UserDetails=()=>{
    const data=useContext(UserContext)
   
    return(
        <div className="">
            {
                data.map((res,index)=>{
                    const {firstName,lastName,age}=res
                    return(
                        <div key={index} className="">
                        <p>First Name :- <strong>{firstName}</strong></p>
                        <p>Last Name :- <strong>{lastName}</strong></p>
                        <p>Age :- <strong>{age}</strong></p>
                        </div>
                    )
                })
            }
           
        </div>
    )
}
export default UserDetails;