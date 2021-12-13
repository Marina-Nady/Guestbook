
import  { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getMsgs} from '../Actions/index'
import Message from './message'

const RecievedMsgs = ()=>{
    const dispatch = useDispatch()
    const msgs = useSelector((state)=>state.msgs)
        const id =   JSON.parse(sessionStorage.getItem("user"))

    useEffect(()=>{
        dispatch(getMsgs());
    },[dispatch])

    if(msgs){
        if(msgs.length>0){
            // return   msgs.map((msg)=>(
            //     <>
            //     <Message info={msg} key={msg.id}/>
            //     </>
            // ))
            return(
                msgs.filter((msg)=>( id.id != msg.auth._id))
                        .map((filtered)=>(
                            <>
                            <Message info={filtered} key={filtered.id}/>
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

export default RecievedMsgs;





