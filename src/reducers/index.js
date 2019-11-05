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
  userInfoForUpdateProfile_state,
  changePassword_modal,
  changePassword_state,
  changePassword
} from "./allReducers"
import {
  squareAI,
  turnAI,
  isPlayingAI,
  historyAI,
  sortTypeHistoryAI
} from "./GameAI_Reducers"

import {
  squareOnline,
  turnOnline,
  isPlayingOnline,
  historyOnline,
  sortTypeHistoryOnline,
  roomInfo,
  message,
  findingAGame_state,
} from "./GameOnline_Reducers"

export default combineReducers({
  square,
  turn,
  isPlaying,
  history,
  sortTypeHistory,
  squareAI,
  turnAI,
  isPlayingAI,
  historyAI,
  sortTypeHistoryAI,
  squareOnline,
  turnOnline,
  isPlayingOnline,
  historyOnline,
  sortTypeHistoryOnline,
  userInfo,
  login,
  login_state,
  register,
  register_state,
  login_modal,
  register_modal,
  userInfoForUpdateProfile,
  userInfoForUpdateProfile_state,
  changePassword_modal,
  changePassword_state,
  changePassword,
  roomInfo,
  message,
  findingAGame_state
})
