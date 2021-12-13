
import  { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getMsgs} from '../Actions/index'
import Message from './message'

const SentMsgs = ()=>{
    const dispatch = useDispatch()
    const msgs = useSelector((state)=>state.msgs)
        const id =   JSON.parse(sessionStorage.getItem("user"))

    useEffect(()=>{
        dispatch(getMsgs());
    },[dispatch])

    if(msgs){
        if(msgs.length>0){
            return(
                msgs.filter((msg)=>( id.id === msg.auth._id))
                        .map((filtered)=>(
                            <>
                            <Message info={filtered} key={filtered._id}/>
                            </>
                        ))        
            ) 
        }else{
            return <p>
            No Msgs
        </p>
        }
       
    }
    return <p>
    Loading...
</p>
}

export default SentMsgs;





