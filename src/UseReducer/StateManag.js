import React, { useReducer } from "react";
const reducer = (state, action) => {
    if (action.type === "DELETE_PERSON") {
        let newObj = state.data.filter((res) => {
            return res.id !== action.payload
        })
        return {
            ...state,
            data: newObj,
            length:state.length-1
        }
    }
}
const StateManage = () => {
    const initialData = {
        data: [
            { id: 123, firstName: 'emm', lastName: 'watson' },
            { id: 1234, firstName: 'srikanth', lastName: 'reddy' }
        ],
        length: 2
    }
    const [state, dispatch] = useReducer(reducer, initialData)

    const deleteItem = (id) => {
        dispatch({
            type: 'DELETE_PERSON',
            payload: id
        })
    }
    return (
        <div className="">
            {
                state.data.map((res) => {
                    const { id, firstName, lastName } = res
                    return (
                        <div key={id} className="">
                            <h5>{firstName}</h5>
                            <p>{lastName}</p>
                            <button className="btn btn-danger" onClick={() => deleteItem(id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default StateManage;