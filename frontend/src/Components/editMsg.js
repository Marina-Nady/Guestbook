import {useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { editMsg } from '../Actions';
import {getMsgs} from '../Actions/index'




const EditMsg = (props)=>{
    const  id  = props.id
    const dispatch = useDispatch()
    const msgs = useSelector((state)=>state.msgs)
    const [content, setContent] = useState();

    useEffect(()=>{
        dispatch(getMsgs());
    },[msgs])

    const handleOnChange = e => setContent(e.target.value)

    const handleOnClick = ()=>{
        document.getElementById("content").value=''
        let obj = {content:content}
        document.getElementById("editModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
                .forEach(el => el.classList.remove("modal-backdrop")); 
        dispatch(editMsg(id,obj))
    }

    


    
    return <div className="text-center">   
        <button type="button" className="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target="#editModal">
            Edit
        </button>

        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <input type="text" id='content'
                        placeholder='Type your message...' 
                        name='content' style={{display:'block',
                                              margin:'auto',
                                              width:'70%'}}
                        onChange={handleOnChange}                      
                />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Dismiss</button>
                <button className="btn btn-dark m-2 w-25"  onClick={handleOnClick}>
                                    Update
                </button>  
                </div>
            </div>
        </div>
        </div>        


    </div>
}
export default EditMsg;
