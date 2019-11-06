import {
  TURN_ONLINE,
  IS_PLAYING_ONLINE,
  HISTORY_SORT_ONLINE,
  HANDLE_CLICK,
  MESSAGE_CHAT,
} from "../actions/actionType"

export const roomInfo = (state = {idRoom: -1, enemy: {}, areYouPlayer1: true, message: []}, action) =>{
  switch (action.type){
    case "RESPONSE FINDING ROOM":{
      return Object.assign({}, state, {
        idRoom: action.idRoom,
        areYouPlayer1: action.isPlayer1
      })
    }
    case "RESPONSE ROOM INFO":{
      console.log(state)
      var enemyUpdate
      var areYouPlayer1Update
      if (state.areYouPlayer1 === true){
        enemyUpdate = action.room.player2
      }
      else {
        enemyUpdate = action.room.player1
      }
      return Object.assign({},state, {
        enemy: enemyUpdate,
        message: action.room.message
      })
    }
    case "REPONSE NEWEST MESSAGE LIST":{ 
      console.log(Object.assign({}, state, {
        message: action.message
      }))
      return Object.assign({}, state, {
        message: action.message
      })
    }
    case "OUT_GAME":{
      return {idRoom: -1, enemy: {}, areYouPlayer1: true, message: []}
    }
    default: return state 
  }
}

export const modalRequestUndo = (state = false, action) => {
  switch (action.type){
    case "OPEN_MODALREQUESTUNDO":{
      return true
    }
    case "CLOSE_MODALREQUESTUNDO":{
      return false
    }
    case "OUT_GAME":{
      return false
    }
    default: return state
  }
}

export const modalRequestTie = (state = false, action) => {
  switch (action.type){
    case "OPEN_MODALREQUESTTIE":{
      return true
    }
    case "CLOSE_MODALREQUESTTIE":{
      return false
    }
    case "OUT_GAME":{
      return false
    }
    default: return state
  }
}

export const message = (state = '', action) => {
  switch (action.type){
    case MESSAGE_CHAT.ON_CHANGE:{
      return action.message
    }
    case "removeMessageInBoxAfterSend":{
      return ''
    }
    case "OUT_GAME":{
      return ''
    }
    default: return state
  }
}

export const squareOnline = (state = Array(400).fill(0), action) => {
  switch (action.type) {
    case "UPDATE NEW BOARD FROM SERVER":{
      console.log("new board: ", action.arrSquare)
      console.log("length: ", action.arrSquare.length)
      const length = action.arrSquare.length
      var stateClone = Array(400).fill(0);
      for (var i = 0; i<length; i+=1){
        if (i%2===0){
          stateClone[action.arrSquare[i]]= 1 
        }
        else {
          stateClone[action.arrSquare[i]] = 2
        }
      }
      console.log("State Clone: ", stateClone)
      return stateClone
    }
    case "DRAW SQUARE WIN":{
      const length = action.arrSquare.length
      var stateClone = Array(400).fill(0);
      for (var i = 0; i<length; i+=1){
        if (i%2===0){
          stateClone[action.arrSquare[i]]= 1 
        }
        else {
          stateClone[action.arrSquare[i]] = 2
        }
      }
      console.log("winner is: ", action.whoIsWinner)
      for (var i = 0; i< action.arrDraw.length; i+=1){
        stateClone[action.arrDraw[i]] = action.whoIsWinner===1? 3 : 4
      }
      console.log("state clone: ", stateClone)
      return stateClone
    }
    case "response update square and current turn after accept undo":{
      const length = action.roomInfo.listSquareTogged.length
      var stateClone = Array(400).fill(0);
      for (var i = 0; i<length; i+=1){
        if (i%2===0){
          stateClone[action.roomInfo.listSquareTogged[i]]= 1 
        }
        else {
          stateClone[action.roomInfo.listSquareTogged[i]] = 2
        }
      }
      console.log("State Clone: ", stateClone)
      return stateClone
    }
    case "OUT_GAME":
    case "RESET BOARD FOR NEW GAME":{
      return Array(400).fill(0)
    }
    default:
      return state
  }
}

export const findingAGame_state = (state = {isFinding: false, foundAGame: false}, action) => {
  switch (action.type){
    case "IS_FINDING_A_GAME":{
      return Object.assign({},state,{
        isFinding: true,
        foundAGame: false
      })
    }
    case "OUT_GAME":
    case "CANCEL_FINDING_A_GAME":{
      return Object.assign({},state,{
        isFinding: false,
        foundAGame: false
      })
    }
    case "FOUND_A_GAME":{
      return Object.assign({},state,
        {
          isFinding:false,
          foundAGame: true
        })
    }
    default: return state
  }
}

export const turnOnline = (state = true, action) => {
  switch (action.type) {
    case "UPDATE NEW TURN FROM SERVER":{
      return action.newTurn
    }
    case "OUT_GAME":
    case "RESET BOARD FOR NEW GAME":{
      return true
    }
    case "response update square and current turn after accept undo":{
      return action.roomInfo.currentTurn
    }
    default:
      return state
  }
}

export const sortTypeHistoryOnline = (state = true, action) => {
  switch (action.type) {
    case HISTORY_SORT_ONLINE.CHANGE: {
      return !state
    }
    case HANDLE_CLICK.LOG_OUT: {
      return true
    }
    default:
      return state
  }
}

export const isPlayingOnline = (state = true, action) => {
  switch (action.type) {
    case IS_PLAYING_ONLINE.STOP: {
      return false
    }
    case IS_PLAYING_ONLINE.START: {
      return true
    }
    case "OUT_GAME":
    case HANDLE_CLICK.LOG_OUT: {
      return true
    }
    default:
      return state
  }
}

export const historyOnline = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_HISTORY_TOGGLED":{
      console.log("history: ", action.history)
      return action.history
    }
    case "OUT_GAME":
    case HANDLE_CLICK.LOG_OUT: {
      return []
    }
    case "response update square and current turn after accept undo":{
      return action.roomInfo.listSquareTogged
    }
    default:
      return state
  }
}

// -1 : don't diplay
// 0: game tie
// 1: player1 win
// 2: player2 win
export const statusOfGame = (state = -1, action) => {
  switch (action.type){
    case "HAVE_A_WINNER":{
      return action.whoWin
    }
    case "OUT_GAME":
    case "RESET BOARD FOR NEW GAME":{
      return -1
    }
    case "SET_GAME_TIE":
    case "UPDATE NORTIFICATION AFTER TIE REQUEST ACCEPT":{
      return 0
    }
    default: return state
  }
}

