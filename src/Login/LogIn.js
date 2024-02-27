import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ACCOUNT_API_BASE_URL="https://api-generator.retool.com/ew1RIF/data"
const LogIn = () => {
  const { userData,login,fetchLoginData } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const changeEvent = (e, name) => {
    if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    }
  };
  let navigate = useNavigate();
  const navigateTo = () => {
    navigate("/", { replace: true });
  };
  const registerUser = () => {
    let newData = {
      email: email,
      password: password,
    };
    let count=0
    for(let i=0;i<userData.length;i++){
      if(email===userData[i].email){
        count++
      }
    }
    if(count>=1){
      alert("user already exist")
    }else{
      axios
      .post(ACCOUNT_API_BASE_URL, newData)
      .then((response) => {
        //   setData([...data, response.data]);
        //   setNewData({ name: '' });
        fetchLoginData(ACCOUNT_API_BASE_URL)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
  };
  const dualContent = () => {
    setRegister(!register);
    if (register) {
    } else {
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Log In Page</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Name"
          value={email}
          onChange={(e) => changeEvent(e, "email")}
          />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => changeEvent(e, "password")}
          />
        {register ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              registerUser();
            }}
          >
            Submit Register Details
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              login(email, password);
              navigateTo();
            }}
          >
            Submit Login Details
          </button>
        )}

        <a className="link-to-navigate" onClick={dualContent}>
          {register
            ? "Already Registered Login Here"
            : "New User Register Here"}
        </a>
      </div>
    </div>
  );
};
export default LogIn;
