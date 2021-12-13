import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMsg } from '../Actions';

const SendMsg = (props) => {
    const dispatch = useDispatch()
    const [msg, setMsg] = useState('');
    const handleChange = e => setMsg(e.target.value)
    const id =   JSON.parse(sessionStorage.getItem("user"))
    // const status =   useSelector((state)=>state.login.isSend)

    const handleOnClick = ()=>{
        let obj = {
            content:msg,
            auth:id.id,
            to:props.to
        }
         dispatch(sendMsg(obj))
         window.location.href=`/home`
      }

    return (
    <>
    <div className="alert d-flex justify-content-between">
        <input type="text" onChange={handleChange}/>
        <input type="button" value="Send" onClick={handleOnClick}/>
    </div>
    </>
    )

}
export default SendMsg;

