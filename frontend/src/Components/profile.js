
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
            <>
            <h1>{details.name}</h1>
            <h1>{details.email}</h1>
            {details._id === id.id 
            ? <div>
                <h4>Sent Messages</h4>
                <SentMsgs owner={details._id}/> 
                <h4>Recieved Messages</h4>
                <RecievedMsgs owner={details._id}/>
             </div>
            : <SendMsg to={details._id}/>}

            
            </>
        )
    }
    return <p>
    Loading...
</p>
    

}
export default Profile;

