export const userReducer= (state=null,action)=>{
    // console.log(action)
    if(action.type === "usersList"){
        return action.payload
    }

    return state
}
