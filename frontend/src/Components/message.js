import DeleteMsg from './deleteMsg'
import EditMsg from './editMsg'
import ReplyMsg from './reply'
import {Link} from 'react-router-dom'

const Message = ({info}) => {
        const id =   JSON.parse(sessionStorage.getItem("user"))

        if (info) {
                return (
                <>
                <div key={info._id} className="alert border border-2 d-flex justify-content-between">
                        {/* <h5>{info.auth.name} : {info.content}</h5>  */}
                        {id.id === info.auth._id 
                        ? <>
                                <h5>To: <br/>  
                                        <Link to={`/profile/${info.to._id}`} style={{cursor:'pointer'}}>
                                                {info.to.name}</Link> 
                                        : {info.content}</h5> 
                                <EditMsg id={info._id}/>
                                <DeleteMsg id={info._id}/>
                          </>

                        : <>
                                <h5>{info.auth.name} : {info.content}</h5> 
                                <ReplyMsg id={info._id}/>
                        </>

                        }
                        
                </div>
                
                </>
        )
}
                return <p>No Info prop available</p>
    
}
export default Message;

