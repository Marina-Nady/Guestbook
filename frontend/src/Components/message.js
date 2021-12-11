import {Link} from 'react-router-dom'
import {useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { sendMsg } from '../Actions';

const Message = (props) => {
    const dispatch = useDispatch()
    const [msg, setMsg] = useState('');
    const handleChange = e => setMsg(e.target.value)

    const handleOnClick = ()=>{
        let obj = {
            content:msg,
            owner:props.id
        }
         dispatch(sendMsg(obj))
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
export default Message;

