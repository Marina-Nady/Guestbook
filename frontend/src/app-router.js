import {BrowserRouter as Router,Switch,Routes,Route,Link} from 'react-router-dom'
import Default from './Components/default';
import Register from './Components/register'
import Login from './Components/login'
import Home from './Components/home'
import Profile from './Components/profile';



const AppRouter = ()=>{
    return <Router>
        <nav className=" navbar-expand-lg navbar navbar-dark bg-dark">
            {/* <div className="container-fluid">
            <Link to="/"  className="text-white text-decoration-none f-3 m-2">Users</Link>
            </div> */}
            <Register/>
            <Login/>
        </nav>

        <div style={{width:'90%',margin:'auto'}}>
            <Routes>
                <Route exact path='/' element={<Default/>} />
                <Route exact path='/home' element={<Home/>} />
                <Route exact path='/profile/:id' element={<Profile/>} />


            </Routes>
        </div>
    </Router>
}
export default AppRouter;