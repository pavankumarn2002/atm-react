import { useState, useEffect }from "react";
import axios from 'axios';
export const useTransactionGetApi=(URL)=>{
    const [data, setData] = useState()
    const fetchData = (url) => {
        axios.get(url).then(response => {
            setData(response.data);
        })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchData(URL)
    }, [])
    return {data,setData}
}
export const useTransactionPostApi=(URL)=>{
}