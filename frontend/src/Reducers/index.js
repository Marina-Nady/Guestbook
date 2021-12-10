import { combineReducers } from 'redux'
import { addUser } from './register';
import { loginUser } from './login';




export default combineReducers({
  add:addUser,
  login:loginUser
})