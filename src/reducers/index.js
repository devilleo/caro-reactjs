import { combineReducers } from "redux";
import { square, turn, isPlaying } from "./allReducers";

export default combineReducers({
  square,
  turn,
  isPlaying
});
