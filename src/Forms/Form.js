import React, { useState } from "react";
const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [theme, setTheme] = useState('')
    const [agree, setAgree] = useState(false);
    const [car, setCar] = useState('');

    const changeEvent = (e, name) => {
        if (name === "firstName") {
            setFirstName(e.target.value)
        } else if (name === "lastName") {
            setLastName(e.target.value)
        } else if (name === "email") {
            setEmail(e.target.value)
        } else if (name === "password") {
            setPassword(e.target.value)
        } else if (name === "agree") {
            setAgree(!agree)
        } else if (name === "gender") {
            setTheme(e.target.value)
        } else if (name === "car") {
            setCar(e.target.value)
        }
    }
    const [data, setData] = useState([
        {
            city: "",
            state: ""
        }
    ])
    const addContent = () => {
        setData([...data, { city: "", state: "" }])
    }
    const deleteContent = (i) => {
        let newData = [...data]
        newData.splice(i, 1)
        setData(newData)
    }
    const adressEvent = (e, i) => {
        const { name, value } = e.target
        console.log(e.target.name)
        const onChangeVal = [...data]
        onChangeVal[i][name] = value
        setData(onChangeVal)
    }
    const submitForm = (e) => {
        e.preventDefault()
        const obj = {
            firstNmae: firstName,
            lastName: lastName,
            email: email,
            password: password,
            agree: agree,
            gender: theme,
            car: car,
            adress: data

        }
        console.log(obj)
    }

    return (
        <div className="">
            <form onSubmit={submitForm}>
                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => changeEvent(e, "firstName")} />
                </div>
                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => changeEvent(e, "lastName")} />
                </div>
                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => changeEvent(e, "email")} />
                </div>
                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => changeEvent(e, "password")} />
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input"
                        type="checkbox"
                        name="agree"
                        value={agree}
                        onChange={(e) => changeEvent(e, "agree")} />
                    <label className="form-check-label">
                        Checked checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value={'male'}
                        onChange={(e) => changeEvent(e, "gender")} />
                    <label className="form-check-label" >
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value={'female'}
                        onChange={(e) => changeEvent(e, "gender")} />
                    <label className="form-check-label" >
                        Female
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio"
                        name="gender"
                        id="other"
                        value={'other'}
                        onChange={(e) => changeEvent(e, "gender")} />
                    <label className="form-check-label" >
                        Others
                    </label>
                </div>
                <div className="form-group mb-2">
                    <select className="form-control" placeholder="select car" onChange={(e) => changeEvent(e, "car")}>
                        <option value="">Select car</option>
                        <option value="audi">audi</option>
                        <option value="merc">merc</option>
                        <option value="free">free</option>
                    </select>
                </div>
                <div className="mb-2">
                    <button className="btn btn-success" onClick={addContent}>Add Adress</button>
                    {
                        data.map((res, i) => {
                            const { city, state } = res
                            return (
                                <div key={i} className=" ">
                                    <input type="text" name="city" id="city" value={city} placeholder="Enter City" onChange={(e) => adressEvent(e, i)} />
                                    <input type="text" name="state" id="state" value={state} placeholder="Enter State" onChange={(e) => adressEvent(e, i)} />
                                    <button className="btn btn-danger" onClick={(e) => deleteContent(i)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="form-btn">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
export default Form;