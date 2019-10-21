import { combineReducers } from "redux";
import { square, turn, isPlaying, history, sortTypeHistory } from "./allReducers";

export default combineReducers({
  square,
  turn,
  isPlaying,
  history,
  sortTypeHistory
});
