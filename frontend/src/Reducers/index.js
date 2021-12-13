import { combineReducers } from 'redux'
import { addUser } from './register';
import { loginUser } from './login';
import { userReducer } from './users';
import { UserDetails } from './profile';
import { sendMsg } from './sendMsg';
import { showMsgs } from './showMsgs';
import { deleteMsg } from './deleteMsg';
import { editMsg } from './editMsg';





export default combineReducers({
  add:addUser,
  login:loginUser,
  users:userReducer,
  details:UserDetails,
  send:sendMsg,
  msgs:showMsgs,
  deleteMsg:deleteMsg,
  editMsg:editMsg
})