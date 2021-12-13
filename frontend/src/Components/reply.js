import {useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addReply } from '../Actions';
import { getReplies } from '../Actions';





const ReplyMsg = (props)=>{
    const  msgId  = props.id
    const dispatch = useDispatch()
    const [reply, setReply] =  useState('')
    const id =   JSON.parse(sessionStorage.getItem("user"))
    const replies =  useSelector((state)=>state.getReplies)




    useEffect(()=>{
        // console.log(replies)
        dispatch(getReplies());
    },[dispatch])

    const handleOnChange = e => setReply(e.target.value)

    const handleOnClick = ()=>{
        document.getElementById("reply").value=''
        document.getElementById("replyModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
                .forEach(el => el.classList.remove("modal-backdrop")); 
        let obj = {content:reply,
                    auth:id.id,
                    msgId:msgId}
        dispatch(addReply(obj))
    }

    
    return <div className="text-center">   
        <button type="button" className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#replyModal">
            Reply
        </button>

        <div className="modal fade" id="replyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Reply</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <input type="text" id='reply'
                        placeholder='Type your message...' 
                        name='reply' style={{display:'block',
                                              margin:'auto',
                                              width:'70%'}}
                        onChange={handleOnChange}                      
                />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Dismiss</button>
                <button className="btn btn-dark m-2 w-25"  onClick={handleOnClick}>
                                    Reply
                </button>  
                </div>
            </div>
        </div>
        </div>        


    </div>
}
export default ReplyMsg;
