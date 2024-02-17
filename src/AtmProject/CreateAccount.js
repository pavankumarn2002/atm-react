import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTransactionGetApi } from "./useTransactionApi";
import { useForm } from "react-hook-form";
const ACCOUNT_API_BASE_URL = "https://api-generator.retool.com/cNuTE3/data";
const CreateAccount = () => {
    const {register,formState:{errors},handleSubmit}=useForm()
    const { data, setData } = useTransactionGetApi(ACCOUNT_API_BASE_URL)
    const navigate=useNavigate()
    const [accountNo, setAccountNumber] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [balance, setBalance] = useState();
    const [deposit, setDeposit] = useState(0);
    const [withDraw, setWithDraw] = useState(0);
    const [location, setLocation] = useState();
    const changeDetails = (e, name) => {
        if (name === "accountNo") {
            setAccountNumber(e.target.value)
        } else if (name === "name") {
            setName(e.target.value)
        } else if (name === "date") {
            setDate(e.target.value)
        } else if (name === "balance") {
            setBalance(e.target.value)
        } else if (name === "deposit") {
            setDeposit(e.target.value)
        } else if (name === "withDraw") {
            setWithDraw(e.target.value)
        } else if (name === "location") {
            setLocation(e.target.value)
        }
    }
    const navigateTo=()=>{
        navigate('/atmProject')
    }
    const submitForm = (e) => {
        e.preventDefault()
        let newData = {
              accountNo:accountNo,
              name:name,
              date:date,
              balance:balance,
              deposit:deposit,
              withDraw:withDraw,
              location:location
        }
        axios.post(ACCOUNT_API_BASE_URL, newData)
            .then(response => {
                //   setData([...data, response.data]);
                //   setNewData({ name: '' });
                setData(response.data)
                navigate('/atmProject')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="">
        <button className="btn btn-primary" onClick={navigateTo}>Back</button>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit(submitForm)} className="row">
                <div className="form-group col-6 mb-2">
                    <lable>Account Number</lable>
                    <input className="form-control" type="text" placeholder="3731-8304-2322-5259"
                        {...register("accountNo",{required:true,pattern:/^\d{4}-\d{4}-\d{4}-\d{4}$/})}
                        id="accountNo"
                        value={accountNo}
                        onChange={(e) => changeDetails(e, "accountNo")} />
                <span className="text-danger">{errors.accountNo?.type ==="required" && "Enter valid number"}</span>
                <span className="text-danger">{errors.accountNo?.type ==="pattern" && "Enter 20 Numbers and hyphen For Every 4 Digits (3731-8304-2322-5259)"}</span>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>First Name</lable>
                    <input className="form-control" type="text" placeholder="Enter Your Name"
                        {...register("name",{required:true,pattern:/^[a-z]*$/,minLength:3,maxLength:20})}
                        id="name"
                        value={name}
                        onChange={(e) => changeDetails(e, "name")} />
                        <span className="text-danger">{errors.name?.type ==="required" && "Name Is Required"}</span>
                        <span className="text-danger">{errors.name?.type ==="pattern" && "Name with out Spaces"}</span>
                        <span className="text-danger">{errors.name?.type ==="minLength" && "Need To Enter More Than 3 Characters"}</span>
                        <span className="text-danger">{errors.name?.type ==="maxLength" && "Need To Enter Less Than 16 Characters"}</span>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Date</lable>
                    <input className="form-control" type="date" placeholder="Enter Date"
                         {...register("date",{required:true})}
                        id="date"
                        value={date}
                        onChange={(e) => changeDetails(e, "date")} />
                        <span className="text-danger">{errors.date?.type ==="required" && "Please Select Date From List"}</span>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Balance</lable>
                    <input className="form-control" type="number"
                        {...register("balance",{required:true,pattern:/^(4\d{3,}|[5-9]\d{2,}|[1-9]\d{3,})$/})}
                        id="balance"
                        value={balance}
                        onChange={(e) => changeDetails(e, "balance")} />
                        <span className="text-danger">{errors.balance?.type ==="required" && "Please Enter Amount"}</span>
                        <span className="text-danger">{errors.balance?.type ==="pattern" && "Please Enter Minimum Of 500 Rs"}</span>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Deposit</lable>
                    <input className="form-control" type="number"
                        name="deposit"
                        id="deposit"
                        value={deposit}
                        onChange={(e) => changeDetails(e, "deposit")} disabled="true"/>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>With Draw</lable>
                    <input className="form-control" type="number"
                        name="withDraw"
                        id="withDraw"
                        value={withDraw}
                        onChange={(e) => changeDetails(e, "withDraw")} disabled="true"/>
                </div>
                <div className="form-group col-6 mb-2">
                    <lable>Location</lable>
                    <input className="form-control" type="text" placeholder="Enter Area"
                        {...register("location",{required:true,minLength:3,maxLength:20})}
                        id="location"
                        value={location}
                        onChange={(e) => changeDetails(e, "location")} />
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
export default CreateAccount