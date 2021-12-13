

export const showMsgs = (state=null,action)=>{
    // let isGet = false;
    if(action.type === "showMsgs"){
        // if(action.payload){
            // let payload = action.payload
            // isGet = true;
            return action.payload
        // }
    }
    return state;
}