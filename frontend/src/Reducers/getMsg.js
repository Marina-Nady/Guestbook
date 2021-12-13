export const MsgDetails = (state=null,action)=>{
    if(action.type === "MsgDetails"){
        return action.payload
    }
    return state;
}