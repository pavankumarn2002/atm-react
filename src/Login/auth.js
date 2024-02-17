import React, { useState, useContext } from "react";

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = (userName) => {
        setUser(userName)
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