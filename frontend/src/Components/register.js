
import {useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from '../Actions/index';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import {Link} from 'react-router-dom'


const Register = ()=>{
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

// const required = (value) => {
//   if (!value.toString().trim().length) {
//     return 'required';
//   }
// };
 
// const mail = (value) => {
//   if (!validator.isEmail(value)) {
//     return `${value} is not a valid email.`
//   }
// };
 
// const nm = (value) => {
//   if (!validator.isAlpha(value)) {
//     return `${value} is not a valid name.`
//   }
// };

 
// const nmLen = (value) => {
//   if (value.length < 3) {
//     return `${value} is not a valid name.`
//   }
// };
   
const status = useSelector((state)=>state.add.isRegister)  

    useEffect(()=>{
      if(status){
            window.location.href='/'
      }
      
    },[status])

      const handleChangeNM = e => setName(e.target.value)
      const handleChangeEM = e => setEmail(e.target.value)
      const handleChangePS = e => setPassword(e.target.value)

      const handleOnClick = ()=>{
        // form_data.append('name', name);
        // form_data.append('email', email);
        // form_data.append('password', password);
        let obj = {
            name:name,
            email:email,
            password:password
        }
         dispatch(addUser(obj))
      }


    return <div className="text-center">
    
             <button type="button" className="btn btn-success my-2 mx-3" data-bs-toggle="modal" data-bs-target="#regModal" >
             Register
             </button>

           <div className="modal fade" id="regModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                  <Form action="" method="POST" >
                  <span className="text-danger">*</span>
                  <div className="d-inline-block">
                    <Input  type="text" onChange={handleChangeNM}  placeholder="Name"  className="m-2"
                           name='name' /> 
                    </div><br/>
                      <span className="text-danger">*</span>                     
                      <div className="d-inline-block">
                      <Input  name='email' placeholder="Email" className="m-2"
                              onChange={handleChangeEM} />
                      </div><br/>
                      <span className="text-danger">*</span>                     
                      <div className="d-inline-block">
                      <Input  name='password' placeholder="Password" className="m-2"
                              onChange={handleChangePS} />
                      </div><br/>


                    <Link className="w-25" to={`/`}>
                    <Button className="btn btn-dark"    onClick={handleOnClick}>
                      Submit
                      </Button>
                      </Link>
                    </Form>
                  </div>
           
               </div>
             </div>
           </div>


    </div>
}
export default Register;

