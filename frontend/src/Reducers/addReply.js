export const addReply = (state=null,action)=>{
    if(action.type === "addReply"){
            return action.payload
    }
    return {state};
}