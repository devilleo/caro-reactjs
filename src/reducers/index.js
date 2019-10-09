import { combineReducers } from "redux";
import { square, turn } from "./allReducers";

export default combineReducers({
  square,
  turn
});
