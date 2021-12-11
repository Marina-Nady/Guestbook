
export const sendMsg= (state=null,action)=>{
    if(action.type === "sendMsg"){
        return action.payload
    }

    return state
}