import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const URL = "https://jsonplaceholder.typicode.com/users"
const Api = () => {
    const navigate=useNavigate()
    const navigateTo=()=>{
        navigate('/')
    }
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState({ status: false, msg: "" })

    const fetchData = async (url) => {
        setIsLoading(true)
        setIsError({ status: false, msg: "" })
        try {
            let res = await fetch(url)
            let data = await res.json()
            setUserData(data)
            setIsLoading(false)
            setIsError({ status: false, msg: "" })
            if (res.status === 404) {
                throw new Error('data not found')
            }
        } catch (error) {
            setIsLoading(false)
            setIsError({ status: true, msg: error.message || "Something went wrong please try again" })
        }
    }
    useEffect(() => {
        fetchData(URL)
    }, [])
    if (isError?.status) {
        return (
            <h5>{isError?.msg}</h5>
        )
    }

    return (
        <div>
        <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1><u>Use Effect With Api</u> :-</h1>
            <h5>Example :- 1</h5>
            {
                isLoading ? (<h5>Loading...</h5>) :
                    (<div className="row">
                        {
                            userData.map((eachContent) => {
                                const { id, name, email } = eachContent
                                return (
                                    <div key={id} className="col-4 card">
                                        <div className="card-head">
                                            <h5>{name}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>{email}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>)
            }

        </div>
    )
}
export default Api;