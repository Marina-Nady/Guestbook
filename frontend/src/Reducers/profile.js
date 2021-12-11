export const UserDetails = (state=null,action)=>{
    if(action.type === "UserDetails"){
        return action.payload
    }
    return state;
}