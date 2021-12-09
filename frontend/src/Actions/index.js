import axios from "axios"

//register
export const addUser = async (data)=>{
    console.log(data)

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
