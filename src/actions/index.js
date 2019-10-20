import { TURN, IS_PLAYING } from "./actionType";
export const toggleSquare = (id, turn) => ({
  type: "TOGGLE_SQUARE",
  id,
  turn
});

export const changeTurn = () => ({
  type: TURN.CHANGE
});

export const stopGame = () => ({
  type: IS_PLAYING.STOP
});

export const clickRestartGame = () => ({
  type: IS_PLAYING.START
});

export const draw = (arrDraw, turn) => ({
  type: "DRAW",
  arrDraw,
  turn
})

export const toggleHistory = (idHistory) => ({
  type: "TOGGLE_HISTORY",
  idHistory,
})