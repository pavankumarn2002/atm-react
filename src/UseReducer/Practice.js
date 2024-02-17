import React, { useState,useEffect, useReducer } from "react";
import { appReducer } from "./appReducer";
const URL = "https://jsonplaceholder.typicode.com/posts";

// const reducer = (state, action) => {
//     if (action.type === "UPDATE") {
//         return {
//             ...state,
//             userData: action.payload
//         }
//     }
//     if (action.type === "LOADING") {
//         return {
//             ...state,
//             isLoading: action.payload
//         }
//     }
//     if (action.type === "ERROR") {
//         return {
//             ...state,
//             isError: action.payload
//         }
//     }
//     if(action.type==="DELETE"){
//         let newObj=state.userData.filter((res)=>{
//             return res.id!==action.payload
//         })
//         return{
//             ...state,
//             userData:newObj
//         }
//     }
//     if(action.type==="EDIT"){
//         return{
//             ...state,
//             isEdit:action.payload
//         }
//     }
//     if(action.type==="UPDATE_DATA"){
//         let newUser=state.userData.map((res)=>{
//             if(res.id===action.payload.id){
//                 return{
//                     id:action.payload.id,
//                     title:action.payload.title,
//                     body:action.payload.body
//                 }
//             }else{
//                 return res
//             }
//         })
//         return{
//             ...state,
//             userData:newUser
//         }
//     }
//     return state
// }
const Practice = () => {
    const initialData = [{
        userData: [],
        isLoading: false,
        isError: { status: false, msg: "" },
        isEdit: { status: false, id: '', title: '', body: '' }
    }]
    const [state, dispatch] = useReducer(appReducer, initialData)
    const fetchData = async (url) => {
        dispatch({
            type: "LOADING", payload: true
        })
        dispatch({
            type: "ERROR", payload: { status: false, msg: "" }
        })
        try {
            let res = await fetch(url);
            let data = await res.json()
            dispatch({
                type: "UPDATE",
                payload: data
            })
            dispatch({
                type: "LOADING", payload: false
            })
            dispatch({
                type: "ERROR", payload: { status: false, msg: "" }
            })
        } catch (error) {
            dispatch({
                type: "ERROR", payload: { status: true, msg: error.message || "some thing went wrong" }
            })
            dispatch({
                type: "LOADING", payload: false
            })
        }
    }
    useEffect(() => {
        fetchData(URL)
    }, [])
    const editContent=(id,title,body)=>{
        dispatch({
            type:"EDIT",
            payload:{status:true,id,title,body}
        })
    }
    const deleteContent=(id)=>{
        dispatch({
            type:"DELETE",
            payload:id
        })
    }
    const updateContent=(id,title,body)=>{
        dispatch({
            type:"UPDATE_DATA",
            payload:{id,title,body}
        })
    }
    if(state?.isError?.status){
        return(
            <div className="">
                <h5>{state?.isError?.msg}</h5>
            </div>
        )
    }
    if (state?.isLoading) {
        return (
            <div className="">
                <h3>Loading...</h3>
            </div>
        )
    }
    return (
        <div className="container row">
            {
                state?.isEdit?.status?(
                <FormData 
                id={state?.isEdit?.id} 
                cTitle={state?.isEdit?.title}
                cBody={state?.isEdit?.body}
                updateContent={updateContent}/>):null
            }
            {
                state?.userData?.map((res, index) => {
                    const { id, title, body } = res;
                    console.log(state.userData.length)
                    if (id < 5) {
                        return (
                            <div key={id} className="">
                                <h5>{title}</h5>
                                <p>{body}</p>
                                <button className="btn btn-success" onClick={()=>editContent(id,title,body)}>Edit</button>
                                <button className="btn btn-danger" onClick={()=>deleteContent(id)}>Delete</button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
const FormData=(props)=>{
    const {id,cTitle,cBody,updateContent}=props
    const [title,setTitle]=useState(cTitle)
    const [body,setBody]=useState(cBody)
    const changeValue=(e,name)=>{
        if(name==="title"){
            setTitle(e.target.value)
        }else if(name==="body"){
            setBody(e.target.value)
        }
    }
    return(
        <div className="">
            <input type="text" name="title" id="title" value={title} onChange={(e)=>changeValue(e,'title')}/>
            <input type="text" name="body" id="body" value={body} onChange={(e)=>changeValue(e,'body')}/>
            <button className="btn btn-primary" onClick={()=>updateContent(id,title,body)}>Update</button>
        </div>
    )
}
export default Practice