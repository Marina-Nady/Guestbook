import {Link} from 'react-router-dom'
const User = ({info}) => {
        if (info) {
                return (
                <>
                <div className="alert border border-2 d-flex justify-content-between">
                <h5>{info.name}</h5>
                <Link to={`/profile/${info._id}`}>
                Send Message
                </Link>
                </div>
                </>
           
        )
}
                return <p>No Info prop available</p>
    
}
export default User;

