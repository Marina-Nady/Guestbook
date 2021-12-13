import {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMsg } from '../Actions';
import {getMsgs} from '../Actions/index'


const DeleteMsg = (props)=>{
    const dispatch = useDispatch()
    const  id  = props.id
    // console.log(status)


    useEffect(()=>{
            dispatch(getMsgs());
    },[dispatch])

    const handleOnClick = ()=>{
        document.getElementById("deleteModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
                .forEach(el => el.classList.remove("modal-backdrop")); 
        dispatch(deleteMsg(id))
  }

    return <>

    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
        Delete
    </button>

<div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Dismiss</button>
        <button className="btn btn-dark m-2 w-25"  onClick={handleOnClick}>
                            Delete
        </button>  
         </div>
    </div>
  </div>
</div>
       


    </>
}
export default DeleteMsg;
