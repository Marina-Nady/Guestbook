export const editMsg = (state=null,action)=>{
    let isUpdated = false
    if(action.type === "editMsg"){
        if(action.payload){
            let payload = action.payload
            isUpdated = true
            return {payload,isUpdated}
        }
        
    }
    return {state,isUpdated};
}