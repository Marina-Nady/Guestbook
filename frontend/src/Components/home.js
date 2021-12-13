import Users from "./users"
import Default from './default';

const Home = ()=>{
    
    if(sessionStorage.user){
        return(
            <div className='m-5'>
           <Users/>
            </div>
        )
    }else{
        return (
        <>
            <Default/>
        </>
    )
        }

}
export default Home