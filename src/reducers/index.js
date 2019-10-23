import { combineReducers } from "redux";
import { square, turn, isPlaying, history, sortTypeHistory, userInfo, login, login_state } from "./allReducers";

export default combineReducers({
  square,
  turn,
  isPlaying,
  history,
  sortTypeHistory,
  userInfo,
  login,
  login_state,
});
