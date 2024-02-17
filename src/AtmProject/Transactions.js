import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useTransactionGetApi } from "./useTransactionApi";
import { Link } from "react-router-dom";
const ACCOUNT_API_BASE_URL = "https://api-generator.retool.com/cNuTE3/data";
const Transactions = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState()
    const [newData, setNewData] = useState()
    const { data, setData } = useTransactionGetApi(ACCOUNT_API_BASE_URL)

    useEffect(() => {
        setNewData(data)
    }, [data])
    const deleteData = (id) => {
        axios.delete(`https://api-generator.retool.com/cNuTE3/data/${id}`)
            .then(() => {
                const newData = data.filter(item => item.id !== id);
                setData(newData)
                setNewData(newData)

            })
            .catch(error => {
                console.error(error);
            })
    }
    const navigateTo = () => {
        navigate('/createAccount')
    }
    const changeHandle = (e, name) => {
        if (name === "search") {
            setSearch(e.target.value)
            let newFilteredData = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].accountNo.substr(0, e.target.value.length) === e.target.value) {
                    newFilteredData.push(data[i])
                }
            }
            setNewData(newFilteredData)
        }
    }

    return (
        <div className="container">
            <button className="btn btn-success cread-account" onClick={navigateTo} >Create New Account</button>
            <input type="number" name="search" id="search" placeholder="Enter Account Number" value={search} onChange={(e) => changeHandle(e, 'search')} />
            
            <table className="table transaction-table mt-4 mb-4">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Account Number</th>
                        <th>Date</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newData === undefined && (
                            <tr>
                                <td colSpan="6">
                                    <h1>Please Enter Valied Input</h1>
                                </td>
                            </tr>
                        )
                    }
                    {

                        newData?.length === 0 ? (
                            <tr>
                                <td colSpan="6">
                                    <h1>Please Enter Valied Input</h1>
                                </td>
                            </tr>
                        ) : (
                            newData?.map((res, index) => {
                                const { id, name, accountNo, date, balance } = res
                                return (
                                    <tr key={id} className="">
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{accountNo}</td>
                                        <td>{date}</td>
                                        <td>{balance}</td>
                                        <td>
                                            <Link to={`/atmProject/${id}`}>
                                                <button className="btn btn-warning transaction">Transaction</button>
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => deleteData(id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Transactions;