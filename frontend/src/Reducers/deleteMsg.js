export const deleteMsg = (state=null,action)=>{
    let isDeleted = false;
    if(action.type === "deleteMsg"){
        if(action.payload){
            let payload=action.type;
             isDeleted = true;
            return {payload,isDeleted}
        }
      
    }
    return {state,isDeleted};
}