
import {useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../Actions/index';
import FormData from "form-data";
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import {Link} from 'react-router-dom'


const Login = ()=>{
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
const status =   useSelector((state)=>state.login.isLogged)

    useEffect(()=>{
      if(status){
            window.location.href='/home'
      }
      
    },[status])

      const handleChangeEM = e => setEmail(e.target.value)
      const handleChangePS = e => setPassword(e.target.value)

      const handleOnClick = ()=>{
        let obj = {
            email:email,
            password:password
        }
        console.log(obj)
         dispatch(loginUser(obj))
      }


    return <div className="text-center">
    
             <button type="button" className="btn btn-success my-2 mx-3" data-bs-toggle="modal" data-bs-target="#loginModal" >
             Login
             </button>

           <div className="modal fade" id="loginModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                  <form action="" method="POST" >
                      <span className="text-danger">*</span>                     
                      <div className="d-inline-block">
                      <input  name='email' placeholder="Email" className="m-2"
                              onChange={handleChangeEM} />
                      </div><br/>
                      <span className="text-danger">*</span>                     
                      <div className="d-inline-block">
                      <input  name='password' placeholder="Password" className="m-2"
                              onChange={handleChangePS} />
                      </div><br/>


                    <Link className="w-25" to={`/`}>
                      <button className="btn btn-dark"    onClick={handleOnClick}>
                      Login
                      </button>
                      </Link>
                    </form>
                  </div>
           
               </div>
             </div>
           </div>


    </div>
}
export default Login;

