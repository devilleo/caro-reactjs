import {
  TURN,
  IS_PLAYING,
  HISTORY_SORT,
  TURN_AI,
  IS_PLAYING_AI,
  HISTORY_SORT_AI,
  TURN_ONLINE,
  IS_PLAYING_ONLINE,
  HISTORY_SORT_ONLINE,
  MESSAGE_CHAT,
} from "./actionType"
export const toggleSquare = (id, turn) => ({
  type: "TOGGLE_SQUARE",
  id,
  turn
})

export const changeTurn = () => ({
  type: TURN.CHANGE
})

export const changeSortHistory = () => ({
  type: HISTORY_SORT.CHANGE
})

export const stopGame = () => ({
  type: IS_PLAYING.STOP
})

export const clickRestartGame = () => ({
  type: IS_PLAYING.START
})

export const draw = (arrDraw, turn) => ({
  type: "DRAW",
  arrDraw,
  turn
})

export const toggleHistory = idHistory => ({
  type: "TOGGLE_HISTORY",
  idHistory
})

// actions play with AI.
export const toggleSquareAI = (id_AI, turn_AI) => ({
  type: "TOGGLE_SQUARE_AI",
  id_AI,
  turn_AI
})

export const changeTurnAI = () => ({
  type: TURN_AI.CHANGE
})

export const changeSortHistoryAI = () => ({
  type: HISTORY_SORT_AI.CHANGE
})

export const stopGameAI = () => ({
  type: IS_PLAYING_AI.STOP
})

export const clickRestartGameAI = () => ({
  type: IS_PLAYING_AI.START
})

export const drawAI = (arrDraw_AI, turn_AI) => ({
  type: "DRAW_AI",
  arrDraw_AI,
  turn_AI
})

export const toggleHistoryAI = idHistory_AI => ({
  type: "TOGGLE_HISTORY_AI",
  idHistory_AI
})

// actions play 1vs1 online.
export const messageOnchange = message => ({
  type: MESSAGE_CHAT.ON_CHANGE,
  message
})

export const removeMessageInBoxAfterSend = () => ({
  type: "removeMessageInBoxAfterSend"
})

export const toggleSquareOnline = (id_ONLINE, turn_ONLINE) => ({
  type: "TOGGLE_SQUARE_ONLINE",
  id_ONLINE,
  turn_ONLINE
})

export const changeTurnOnline = () => ({
  type: TURN_ONLINE.CHANGE
})

export const changeSortHistoryOnline = () => ({
  type: HISTORY_SORT_ONLINE.CHANGE
})

export const stopGameOnline = () => ({
  type: IS_PLAYING_ONLINE.STOP
})

export const clickRestartGameOnline = () => ({
  type: IS_PLAYING_ONLINE.START
})

export const drawOnline = (arrDraw_ONLINE, turn_ONLINE) => ({
  type: "DRAW_ONLINE",
  arrDraw_ONLINE,
  turn_ONLINE
})

export const toggleHistoryOnline = idHistory_ONLINE => ({
  type: "TOGGLE_HISTORY_ONLINE",
  idHistory_ONLINE
})

export const clickFindingAGame = () => ({
  type: "IS_FINDING_A_GAME",
})

export const closeModalRequestUndo = () => ({
  type: "CLOSE_MODALREQUESTUNDO"
})

export const sendRequestUndo = () => ({
  type: "SEND_REQUEST_UNDO"
})

export const closeModalRequestTie = () => ({
  type: "CLOSE_MODALREQUESTTIE"
})

export const sendRequestTie = () => ({
  type: "SEND_REQUEST_TIE"
})

export const setGameTie = () => ({
  type: "SET_GAME_TIE"
})