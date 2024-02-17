import React,{useState,useContext} from "react";
const employeeContext = React.createContext();
const EmployeeDetails=()=>{
    const [employee,setEmployee]=useState({Id:101,Name:'Pragim',
    Location:'Bangalore',Salary:12345});
    return (
       <div>
       <employeeContext.Provider value={employee}>
             <Employee></Employee>
       </employeeContext.Provider>
       </div>
    )
}
function Employee(){
    let context=useContext(employeeContext);
  
    return(
      <div>
        <h2>Welcome to Employee Component...</h2>
        <p>
          <label>Employee ID : <b>{context.Id}</b></label>
        </p>
        <p>
          <label>Employee Name : <b>{context.Name}</b></label>
        </p>
        <Salary></Salary>
      </div>
    );
  }
  
  function Salary(){
    let context=useContext(employeeContext);
  
    return(
      <div>
        <h2>Welcome to Salary Component...</h2>
        <p>
          <label>Employee ID : <b>{context.Id}</b></label>
        </p>
        <p>
          <label>Employee Salary : <b>{context.Salary}</b></label>
        </p>
      </div>
    );
  }
export default EmployeeDetails;