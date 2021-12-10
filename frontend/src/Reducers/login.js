// export const UserLogin = (state=null, action) => {
//     console.log(state)
//     let isLogged = false;
//     if(action.type === "UserLogin"){
//         if(action.payload){
//             let payload = action.payload
//             isLogged = true
//             return {payload,isLogged}
//         }
//         return {state,isLogged};
//     }

//   };


export const loginUser = (state=null,action)=>{
    let isLogged = false;
    if(action.type === "loginUser"){
        if(action.payload){
            let payload = action.payload
            isLogged = true;
            console.log(payload)
            return {payload,isLogged}
        }
    }

    return {state,isLogged};
}