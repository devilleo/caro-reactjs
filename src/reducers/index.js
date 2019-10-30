import { combineReducers } from "redux"
import {
  square,
  turn,
  isPlaying,
  history,
  sortTypeHistory,
  userInfo,
  login,
  login_state,
  register,
  register_state,
  login_modal,
  register_modal,
  userInfoForUpdateProfile,
  userInfoForUpdateProfile_state
} from "./allReducers"

export default combineReducers({
  square,
  turn,
  isPlaying,
  history,
  sortTypeHistory,
  userInfo,
  login,
  login_state,
  register,
  register_state,
  login_modal,
  register_modal,
  userInfoForUpdateProfile,
  userInfoForUpdateProfile_state
})
