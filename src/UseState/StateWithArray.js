import React, { useState } from "react";

const StateWithArray = () => {
    const initialArray = [
        {
            id: "psd",
            firstName: 'emmo',
            lastName: 'watson',
            age: 27
        },
        {
            id: "msd",
            firstName: 'srikanth',
            lastName: 'racherla',
            age: 27
        }
    ]
    const [data, setData] = useState(initialArray)
    const deleteItem = (comingId) => {
        const result=data.filter((res)=>{
               return res.id!==comingId
        })
        setData(result)
    }
    return (
        <div className="">
            {
                data.map((eachContent, index) => {
                    const { id, firstName, lastName, age } = eachContent
                    return (
                        <div key={index}>
                            <p>First Name :-<strong>{firstName}</strong></p>
                            <p>Last Name :-<strong>{lastName}</strong></p>
                            <p>Age :-<strong>{age}</strong></p>
                            <button className="btn btn-danger" onClick={() => deleteItem(id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default StateWithArray