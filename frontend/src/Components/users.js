
import  { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getUsers} from '../Actions/index'
import User from './user'

const UsersList = ()=>{
    const dispatch = useDispatch()
    const users = useSelector((state)=>state.users)
    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])

    if(users){
        if(users.length>0){
            return   users.map((user)=>(
                <>
                <User info={user} key={user.id}/>
                </>
            ))
        }else{
            return <p>
            No Users
        </p>
        }
       
    }
    return <p>
    Loading...
</p>
}

export default UsersList;





