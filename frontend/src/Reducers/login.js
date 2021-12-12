
export const loginUser = (state=null,action)=>{
    let isLogged = false;
    if(action.type === "loginUser"){
        if(action.payload){
            let payload = action.payload
            isLogged = true;
            return {payload,isLogged}
        }
    }

    return {state,isLogged};
}