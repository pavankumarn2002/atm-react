import React, {useState} from "react";
const Toggle=()=>{
    const [showData,setShowData]=useState(false)
    const toggle=()=>{
        setShowData(!showData)
    }
    return(
        <div className=''>
             <button className="btn btn-primary" onClick={toggle}>{showData?"Hide":"Show"}</button>
             <p><u>Procidure One</u></p>
             {
               (showData && <div>Data</div>) 
             }
              <p><u>Procidure Two</u></p>
            {
               showData ? (<div>lorem20 lorem20 lorem20 lorem20 lorem20</div>) :(<div>Data Hidden</div>)
             }
        </div>
    )
}
export default Toggle;