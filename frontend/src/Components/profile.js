
import {useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { UserDetails} from '../Actions'
import {useParams} from 'react-router-dom'
import SendMsg from './sendMsg';
import SentMsgs from './sentMsgs';
import RecievedMsgs from './recievedMsgs';


const Profile = ()=>{
    const dispatch = useDispatch()
    const params = useParams();
    const details = useSelector((state)=>state.details)
    const id =   JSON.parse(sessionStorage.getItem("user"))

    useEffect(()=>{
        dispatch(UserDetails(params.id))
    },[params.id])

    if(details){
        return(
            <div className='m-3'>
            <h3>Name: {details.name}</h3>
             <h3>Email: {details.email}</h3>
             <br/>
            {details._id === id.id 
            ? <div>
                <h4>Sent Messages</h4>
                <SentMsgs owner={details._id}/> 
                <h4>Recieved Messages</h4>
                <RecievedMsgs owner={details._id}/>
             </div>
            : <SendMsg to={details._id}/>}

            
            </div>
        )
    }
    return <p>
    Loading...
</p>
    

}
export default Profile;

