export const appReducer = (state, action) => {
    if (action.type === "UPDATE") {
        return {
            ...state,
            userData: action.payload
        }
    }
    if (action.type === "LOADING") {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if (action.type === "ERROR") {
        return {
            ...state,
            isError: action.payload
        }
    }
    if(action.type==="DELETE"){
        let newObj=state.userData.filter((res)=>{
            return res.id!==action.payload
        })
        return{
            ...state,
            userData:newObj
        }
    }
    if(action.type==="EDIT"){
        return{
            ...state,
            isEdit:action.payload
        }
    }
    if(action.type==="UPDATE_DATA"){
        let newUser=state.userData.map((res)=>{
            if(res.id===action.payload.id){
                return{
                    id:action.payload.id,
                    title:action.payload.title,
                    body:action.payload.body
                }
            }else{
                return res
            }
        })
        return{
            ...state,
            userData:newUser
        }
    }
    return state
}