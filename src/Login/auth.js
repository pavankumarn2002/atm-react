import React, { useState, useContext,useEffect } from "react";
const URL="https://api-generator.retool.com/ew1RIF/data"
const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const fetchLoginData=async (url)=>{
        let res=await fetch(URL);
        let data=await res.json()
        setUserData(data)
    }
    useEffect(()=>{
        fetchLoginData(URL)
    },[userData])
    const login = (email,password) => {
        for(let i=0;i<userData.length;i++){
            if(email===userData[i].email && password===userData[i].password){
                setUser(email)
                console.log(userData[i])
            }
        }
        fetchLoginData(URL)
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }} > {children}</ AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}