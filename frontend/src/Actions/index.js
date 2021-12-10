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


export const loginUser = (data) => {
    return axios.post(`http://localhost:4000/api/users/login`, data)
      .then((response) => {
        if (response.data.token) {
          console.log(response.data)
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return{
          type:"loginUser",
          payload:response.data
        }
      });
  };
  
