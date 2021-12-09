export const addUser = (state=null,action)=>{
    let isRegister = false;
    if(action.type === "addUser"){
        if(action.payload){
            let payload = action.payload
            isRegister = true;
            return {payload,isRegister}
        }
    }
    return {state,isRegister};
}