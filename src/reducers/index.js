import { combineReducers } from "redux";
import { square, turn, isPlaying, history } from "./allReducers";

export default combineReducers({
  square,
  turn,
  isPlaying,
  history
});
