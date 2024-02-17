import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useTransactionGetApi } from "./useTransactionApi";
import axios from "axios";
import { useForm } from "react-hook-form";
const ACCOUNT_API_BASE_URL = "https://api-generator.retool.com/cNuTE3/data";
const AccountDetails = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    
    
    const [date, setDate] = useState();

    useEffect(() => {
      setDate(getFormattedDate());
    }, []);
  
    const getFormattedDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const [balance, setBalance] = useState();
    const [deposit, setDeposit] = useState();
    const [withDraw, setWithDraw] = useState();
    const [location, setLocation] = useState();
    const [disableDeposit,setDisableDeposit]=useState(false)
    const [disableWithDraw,setDisableWithDraw]=useState(false)
    const reId = useParams()
    const { data, setData } = useTransactionGetApi(ACCOUNT_API_BASE_URL)
    const accDetails = data?.find((res) => {
        return res.id === parseInt(reId.id)
    })
    useEffect(() => {
        setBalance(accDetails?.balance)
    }, [accDetails])
    const changeDetails = (e, name) => {
        if (name === "date") {
            setDate(e.target.value)
        } else if (name === "deposit") {
            setDeposit(e.target.value)
            if (e.target.value !== '' && e.target.value>0) {
                let bal = parseInt(accDetails?.balance) + parseInt(e.target.value)
                setBalance(bal)
                setDisableWithDraw(true)
            } else {
                setBalance(accDetails?.balance)
                setDisableWithDraw(false)
            }
        } else if (name === "withDraw") {
            setWithDraw(e.target.value)
            if (e.target.value !== '' && e.target.value>0) {
                let bal = parseInt(accDetails?.balance) - parseInt(e.target.value)
                setBalance(bal)
                setDisableDeposit(true)
            } else {
                setBalance(accDetails?.balance)
                setDisableDeposit(false)
            }
        } else if (name === "location") {
            setLocation(e.target.value)
        }
    }
     const navigateTo=()=>{
        navigate('/atmProject')
     }
    const submitForm = (e) => {
        e.preventDefault()
        const obj = {
            accountNo: accDetails?.accountNo,
            name: accDetails?.name,
            balance: balance,
            date: date,
            deposit: deposit,
            withDraw: withDraw,
            location: location
        }
        console.log(obj)
        axios.put(`https://api-generator.retool.com/cNuTE3/data/${accDetails?.id}`, obj)
            .then(response => {
                const newData = data.map(item => {
                    if (item.id === accDetails.id) {
                        return response.data;
                    }
                    return item;
                });
                setData(newData)
                navigate('/atmProject')
            })
            .catch(error => {
                console.log(error);
            })
       
    }

    return (
        <div className=" ">
            <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1>AccountDetails</h1>
            <form onSubmit={handleSubmit(submitForm)} className="row">
                <div className="form-group col-6 mb-2">
                    <lable>Account Number</lable>
                    <input className="form-control" type="text"
                        name="accountNo"
                        id="accountNo"
                        value={accDetails?.accountNo}
                        onChange={(e) => changeDetails(e, "accountNo")} readOnly />
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Name</lable>
                    <input className="form-control" type="text"
                        name="name"
                        id="name"
                        value={accDetails?.name}
                        onChange={(e) => changeDetails(e, "name")} readOnly />
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Date</lable>
                    <input className="form-control" type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={(e) => changeDetails(e, "date")} required/>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Balance</lable>
                    <input className="form-control" type="number"
                        name="balance"
                        id="balance"
                        value={balance}
                        onChange={(e) => changeDetails(e, "balance")} readOnly />
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Deposit</lable>
                    <input className="form-control" type="number"
                        name="deposit"
                        id="deposit"
                        value={deposit}
                        onChange={(e) => changeDetails(e, "deposit")} disabled={disableDeposit}/>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>With Draw</lable>
                    <input className="form-control" type="number"
                        name="withDraw"
                        id="withDraw"
                        value={withDraw}
                        onChange={(e) => changeDetails(e, "withDraw")} disabled={disableWithDraw}/>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Location</lable>
                    <input className="form-control" type="text"
                        {...register("location",{required:true,minLength:3,maxLength:20})}
                        id="location"
                        value={location}
                        onChange={(e) => changeDetails(e, "location")}/>
                        <span className="text-danger">{errors.location?.type ==="required" && "Enter Location"}</span>
                        <span className="text-danger">{errors.location?.type ==="minLength" && "Need To Enter More Than 3 Characters"}</span>
                        <span className="text-danger">{errors.location?.type ==="maxLength" && "Need To Enter Less Than 16 Characters"}</span>
                </div>
                <div className="form-btn">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
export default AccountDetails