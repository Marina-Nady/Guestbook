import { combineReducers } from 'redux'
import { addUser } from './register';



export default combineReducers({
  add:addUser,
})