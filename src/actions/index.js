import { TURN, IS_PLAYING, HISTORY_SORT, TURN_AI, IS_PLAYING_AI, HISTORY_SORT_AI } from "./actionType";
export const toggleSquare = (id, turn) => ({
  type: "TOGGLE_SQUARE",
  id,
  turn
});

export const changeTurn = () => ({
  type: TURN.CHANGE
});

export const changeSortHistory = () => ({
    type: HISTORY_SORT.CHANGE
})

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

// actions play with AI.
export const toggleSquareAI = (id_AI, turn_AI) => ({
  type: "TOGGLE_SQUARE_AI",
  id_AI,
  turn_AI
});

export const changeTurnAI = () => ({
  type: TURN_AI.CHANGE
});

export const changeSortHistoryAI = () => ({
    type: HISTORY_SORT_AI.CHANGE
})

export const stopGameAI = () => ({
  type: IS_PLAYING_AI.STOP
});

export const clickRestartGameAI = () => ({
  type: IS_PLAYING_AI.START
});

export const drawAI = (arrDraw_AI, turn_AI) => ({
  type: "DRAW_AI",
  arrDraw_AI,
  turn_AI
})

export const toggleHistoryAI = (idHistory_AI) => ({
  type: "TOGGLE_HISTORY_AI",
  idHistory_AI,
})