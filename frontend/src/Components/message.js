import {Link} from 'react-router-dom'
import {UserDetails} from '../Actions/index'
import  { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import DeleteMsg from './deleteMsg'

const Message = ({info}) => {
        const id =   JSON.parse(sessionStorage.getItem("user"))

        if (info) {
                return (
                <>
                <div className="alert border border-2 d-flex justify-content-between">
                        {/* <h5>{info.auth.name} : {info.content}</h5>  */}
                        {id.id == info.auth._id 
                        ? <>
                                <h5>To: {info.to.name} : {info.content}</h5> 
                                <button>Edit</button>
                                <DeleteMsg id={info._id}/>
                          </>

                        : <>
                                <h5>{info.auth.name} : {info.content}</h5> 
                                <button>Reply</button>
                        </>

                        }
                        
                </div>
                
                {/* <h5>to: {info.to.name}</h5> */}
                {/* <Link to={`/profile/${info._id}`}>
                Send Message
                </Link> */}
                {/* {id.id === info._id
                        ?   <Link to={`/profile/${info._id}`}>Profile</Link>
                        : <Link to={`/profile/${info._id}`}>Send Message</Link>
                } */}
                </>
        )
}
                return <p>No Info prop available</p>
    
}
export default Message;

