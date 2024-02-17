import React, { useState } from "react";
const Editing = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [editingId, setEditingId] = useState("")
    const [list, setList] = useState([])
    const [message, setMessage] = useState({
        text: '',
        id: ''
    })
    const handleChange = (e) => {
        setMessage({
            ...message,
            text: e.target.value
        })
    }
    const addContent = (e) => {
        e.preventDefault()
        setMessage({
            ...message,
            text: e.target.value,
            id: new Date().getTime().toString()
        })
        setList([...list, message])
    }
    const deleteContent = (comingId) => {
        const delObj = list.filter((res) => {
            return res.id !== comingId
        })
        setList(delObj)
    }
    const allowEdit = (comingId) => {
        setEditingId(comingId)
        setIsEdit(true)
        let editableObj = list.find((eachItem) => eachItem.id === comingId);
        setMessage({
            ...message,
            text: editableObj.text,
            id: editableObj.id,
        })
    }
    const editContent = (e) => {
        e.preventDefault();
        let newToDos = list.map((eachItem) => {
            if (eachItem.id === editingId) {
                return {
                    text: message.text,
                    id: editingId
                }
            } else {
                return eachItem
            }
        })
        setList(newToDos)
        setMessage({
            text: "",
            id: ""
        })
        setEditingId("")
        setIsEdit(false)
    }
    return (
        <div className="container">
            <form>
                <input
                    type="text"
                    name="message"
                    id="message"
                    value={message.text}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Message" />
                {isEdit ? (<button className="btn btn-success" onClick={(e) => editContent(e)}>Edit</button>) :
                    (<button className="btn btn-primary" onClick={addContent}>Add</button>)}

            </form>
            <hr />
            {list.length === 0 ? (<h5>No Data</h5>) : (
                list.map((res) => {
                    const { text, id } = res;
                    return (
                        <div key={id} className="">
                            <span>{text}</span>
                            <button className="btn btn-success" onClick={() => allowEdit(id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteContent(id)}>Delete</button>
                        </div>
                    )
                })
            )}
        </div>
    )
}
export default Editing;