
export const sendMsg= (state=null,action)=>{
    let isSend = false
    if(action.type === "sendMsg"){
        if(action.payload){
            let payload = action.payload
            isSend = true;
            return {payload,isSend}


        }
    }

    return {state,isSend}
}