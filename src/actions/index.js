import { TURN } from "./actionType";
export const toggleSquare = (id, turn) => ({
  type: "TOGGLE_SQUARE",
  id,
  turn
});

export const changeTurn = () => ({
  type: TURN.CHANGE
});
