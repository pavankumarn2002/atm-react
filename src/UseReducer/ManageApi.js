import React, { useState, useEffect, useReducer } from "react";
const reducer = (state, action) => {
    if (action.type === "UPDATE_DATA") {
        return {
            ...state,
            userData: action.payload
        }
    }
    if (action.type === "IS_LOADING") {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if (action.type === "DELETE_CONTENT") {
        let newData = state.userData.filter((res) => {
            return res.id !== action.payload
        })
        return {
            ...state,
            userData: newData
        }
    }
    if (action.type === "ERROR") {
        return {
            ...state,
            isError: action.payload
        }
    }
    if (action.type === "EDIT") {
        return {
            ...state,
            isEdit: action.payload
        }
    }
    if (action.type === "UPDATE") {
        let newUser = state.userData.map((res) => {
            if (res.id === action.payload.id) {
                return {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }
            } else {
                return res
            }
        })
        return {
            ...state,
            userData: newUser
        }

    }
    return state
}
const ManageApi = () => {
    const URL = "https://jsonplaceholder.typicode.com/users"
    const initialData = {
        userData: [],
        isLoading: false,
        isError: { status: false, msg: "" },
        isEdit: { status: false, id: '', name: '', email: '' }
    }
    const [state, dispatch] = useReducer(reducer, initialData)
    const fetchData = async (url) => {
        dispatch({
            type: "IS_LOADING",
            payload: true
        })
        dispatch({
            type: "ERROR",
            payload: { status: false, msg: "" }
        })
        try {
            let res = await fetch(url);
            let data = await res.json();
            dispatch({
                type: "UPDATE_DATA",
                payload: data
            })
            dispatch({
                type: "IS_LOADING",
                payload: false
            })
            dispatch({
                type: "ERROR",
                payload: { status: false, msg: "" }
            })
        } catch (error) {
            dispatch({
                type: "IS_LOADING",
                payload: false
            })
            dispatch({
                type: "ERROR",
                payload: { status: true, msg: "something went wrong" }
            })
        }

    }
    useEffect(() => {
        fetchData(URL)
    }, [])
    const deleteContent = (id) => {
        dispatch({
            type: "DELETE_CONTENT",
            payload: id
        })
    }
    const editContent = (id, name, email) => {

        dispatch({
            type: "EDIT",
            payload: { status: true, id: id, name: name, email: email }
        })
    }
    const updateContent = (id, name, email) => {
        dispatch({
            type: "UPDATE",
            payload: { id: id, name: name, email: email }
        })
    }
    if (state?.isError.status) {
        return (
            <div >
                <h5>{state?.isError.msg}</h5>
            </div>
        )
    }
    if (state?.isLoading) {
        return (
            <div className="">
                <h5>Loading...</h5>
            </div>
        )
    }

    return (
        <div className="row">
            {
                state.isEdit?.status &&
                <FormData
                    id={state.isEdit.id}
                    comingName={state.isEdit.name}
                    comingEmail={state.isEdit.email}
                    updateContent={updateContent} />
            }
            {
                state.userData.map((res) => {
                    const { id, name, email } = res;
                    return (
                        <div key={id} className="col-4">
                            <h5>{name}</h5>
                            <p>{email}</p>
                            <button className="btn btn-danger" onClick={() => deleteContent(id)}>Delete</button>
                            <button className="btn btn-success" onClick={() => editContent(id, name, email)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
const FormData = ({ id, comingName, comingEmail, updateContent }) => {
    const [title, setTitle] = useState(comingName || '')
    const [email, setEmail] = useState(comingEmail || '')
    const changeHandler = (e, name) => {
        if (name === "title") {
            setTitle(e.target.value)
        }
        if (name === "email") {
            setEmail(e.target.value)
        }
    }
    return (
        <div className="">
            <input type="text" name="title" value={title} onChange={(e) => changeHandler(e, "title")} />
            <input type="email" name="email" value={email} onChange={(e) => changeHandler(e, 'email')} />
            <button className='btn btn-primary' onClick={() => updateContent(id, title, email)}>Update</button>
        </div>
    )
}
export default ManageApi;