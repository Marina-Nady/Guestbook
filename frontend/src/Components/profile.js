
import {useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { UserDetails} from '../Actions'
import {Link,useParams} from 'react-router-dom'
import SendMsg from './sendMsg';
import ShowMsgs from './showMsgs';
import Message from './message';


const Profile = ()=>{
    const dispatch = useDispatch()
    const params = useParams();
    const details = useSelector((state)=>state.details)
    const id =   JSON.parse(sessionStorage.getItem("user"))

    useEffect(()=>{
        dispatch(UserDetails(params.id))
    },[dispatch])

    if(details){
        return(
            <>
            <h1>{details.name}</h1>
            <h1>{details.email}</h1>
            {details._id == id.id 
            ? <div></div> 
            : <SendMsg to={details._id}/>}
            <h4>Messages</h4>
            <ShowMsgs owner={details._id}/>
            </>
        )
    }
    return <p>
    Loading...
</p>
    

}
export default Profile;

