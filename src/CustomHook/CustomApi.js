import React from "react";
import { useApi } from "./useApi";
const URL = "https://jsonplaceholder.typicode.com/users"
const CustomApi = () => {
   const [userData]=useApi(URL)
    return (
        <div className="">
            {
                userData?.map((res,index) => {
                    const { id, name, email } = res
                    if(index<5){

                        return (
                            <div  key={id}>
                                <h5>{name}</h5>
                                <p>{email}</p>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
export default CustomApi