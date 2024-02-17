import {useState,useEffect} from "react";
export const useApi=(URL)=>{
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async (url) => {
        setIsLoading(true)
        try {
            let res = await fetch(url)
            let data = await res.json()
            setUserData(data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData(URL)
    },[])
    return [userData,isLoading]
}