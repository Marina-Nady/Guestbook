export const getReplies = (state=null,action)=>{
    if(action.type === "getReplies"){
        return action.payload
    }
    return state;
}