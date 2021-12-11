
import {useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { UserDetails} from '../Actions'
import {Link,useParams} from 'react-router-dom'
import Message from './message';

const Profile = ()=>{
    const dispatch = useDispatch()
    const params = useParams();
    const details = useSelector((state)=>state.details)

    useEffect(()=>{
        dispatch(UserDetails(params.id))
    },[dispatch])

    if(details){
        return(
            <>
            <h1>{details.name}</h1>
            <h1>{details.email}</h1>
            <Message id={params.id}/>
            </>
        )
    }
    return <p>
    Loading...
</p>
    

}
export default Profile;

