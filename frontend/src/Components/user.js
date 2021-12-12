import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';

const User = ({info}) => {
        const id =   JSON.parse(sessionStorage.getItem("user"))


        if (info) {
                return (
                <>
                <div className="alert border border-2 d-flex justify-content-between">
                <h5>{info.name}</h5>
                {/* <Link to={`/profile/${info._id}`}>
                Send Message
                </Link> */}
                {id.id === info._id
                        ?   <Link to={`/profile/${info._id}`}>Profile</Link>
                        : <Link to={`/profile/${info._id}`}>Send Message</Link>
      }
                </div>
                </>
           
        )
}
                return <p>No Info prop available</p>
    
}
export default User;

