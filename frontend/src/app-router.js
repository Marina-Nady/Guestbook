import {BrowserRouter as Router,Switch,Routes,Route,Link} from 'react-router-dom'
import Register from './Components/register'

const AppRouter = ()=>{
    return <Router>
        <nav className=" navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to="/"  className="text-white text-decoration-none f-3 m-2">Users</Link>
            </div>
            <Register/>
        </nav>

        <div style={{width:'90%',margin:'auto'}}>
            <Routes>
                <Route exact path="/" component={Register}/>
                <Route exact path="/add" component={Register}/>
            </Routes>
        </div>
    </Router>
}
export default AppRouter;