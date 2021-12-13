import axios from "axios"

//register
export const addUser = async (data)=>{
   let response = null;
   try {
       response = await axios.post(`http://localhost:4000/api/users/register`,data)
       
   } catch (err) {
       console.log(err)
   }

   return{
       type:"addUser",
       payload:response.data
   }
}

//login
export const loginUser = (data) => {
    return axios.post(`http://localhost:4000/api/users/login`, data)
      .then((response) => {
        if (response.data.token) {
          console.log(response.data)
          sessionStorage.setItem("user", JSON.stringify(response.data));
        }
        return{
          type:"loginUser",
          payload:response.data
        }
      });
  };


//get all users
export const  getUsers = async () =>{
  let response = null;
  try {
      response = await axios.get('http://localhost:4000/api/users')
          
  } catch (err) {
      console.log(err)
  }

   return{
      type:"usersList",
      payload:response.data
  }
}

//get user by ID
export const UserDetails = async (id)=>{
  let response = null;
  try {
      response = await axios.get(`http://localhost:4000/api/users/${id}`)

  } catch (err) {
      console.log(err)

  }

  return {
      type:'UserDetails',
      payload:response.data
  }
}

//send message
export const sendMsg = async (data)=>{
  let response = null;
  try {
      response = await axios.post(`http://localhost:4000/api/messages/send`,data)
      
  } catch (err) {
      console.log(err)
  }
  return{
      type:"sendMsg",
      payload:response.data
  }
}

// get all msgs
export const  getMsgs = async () =>{
  let response = null;
  try {
      response = await axios.get('http://localhost:4000/api/messages/allmsgs')
          
  } catch (err) {
      console.log(err)
  }

   return{
      type:"showMsgs",
      payload:response.data
  }
}

//delete msg
export const deleteMsg = async (id)=>{

  let response = null;
  try {
      response = await axios.delete(`http://localhost:4000/api/messages/${id}`)
      
  } catch (err) {
      console.log(err)
  }

  return{
      type:"deleteMsg",
      payload:response.data
  }
}

//edit msg
export const editMsg = async (id,data)=>{

  let response = null;
  try {
      response = await axios.patch(`http://localhost:4000/api/messages/${id}`,data)
      
  } catch (err) {
      console.log(err)
  }

  return{
      type:"editMsg",
      payload:response.data
  }
}

//get msg by id
export const MsgDetails = async (id)=>{
    let response = null;
    try {
        response = await axios.get(`http://localhost:4000/api/messages/${id}`)
  
    } catch (err) {
        console.log(err)
  
    }
  
    return {
        type:'MsgDetails',
        payload:response.data
    }
  }

//add reply
export const addReply = async (data)=>{
    let response = null;
    try {
        response = await axios.post(`http://localhost:4000/api/messages/reply`,data)
        
    } catch (err) {
        console.log(err)
    }
    return{
        type:"addReply",
        payload:response.data
    }
  }

  //get all replies
  export const  getReplies = async () =>{
    let response = null;
    try {
        response = await axios.get('http://localhost:4000/api/messages/replies')
            
    } catch (err) {
        console.log(err)
    }
  
     return{
        type:"getReplies",
        payload:response.data
    }
  }