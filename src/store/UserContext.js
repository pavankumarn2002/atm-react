import React from "react";
const data=[
    {
        firstName:'emmo',
        lastName:'watson',
        age:27
    },
    {
        firstName:'srikanth',
        lastName:'reddy',
        age:27
    }
]
export const UserContext=React.createContext()
export const UserContextProvider=({children})=>{
        return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}