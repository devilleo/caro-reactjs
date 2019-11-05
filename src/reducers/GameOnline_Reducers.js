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

export const message = (state = '', action) => {
  switch (action.type){
    case MESSAGE_CHAT.ON_CHANGE:{
      return action.message
    }
    case "removeMessageInBoxAfterSend":{
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

/* state historyOnline inclues:
        I. [,,]
          first param: list of history
          second param: turn at that time
          third param: the position was just toggled 
        II. Array(400).fill(0)
          param: the current board
        III. 0
          param: posision in history for focusing item history
    */
export const historyOnline = (state = [[], Array(400).fill(0), 0], action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE_ONLINE":
    case "TOGGLE_ONLINE_TURN": {
      let stateClone = state.slice()
      stateClone[1][action.id_ONLINE] = action.turn_ONLINE ? 1 : 2
      let newHistory = [stateClone[1].slice(), action.turn_ONLINE, action.id_ONLINE]
      stateClone[0].push(newHistory)
      stateClone[2] = stateClone[0].length - 1
      return stateClone
    }

    case "TOGGLE_HISTORY_ONLINE": {
      const stateClone = state.slice()
      stateClone[1] = []
      stateClone[1] = stateClone[0][action.idHistory_ONLINE][0].slice()
      stateClone[2] = action.idHistory_ONLINE
      return stateClone
    }
    case "RESET_HISTORY_ONLINE": {
      return [[], Array(400).fill(0), 0]
    }
    case "THE_LAST_UPDATE_IN_HISTORY_BEFORE_END_GAME_ONLINE": {
      let stateClone = state.slice()
      stateClone[1][action.id_ONLINE] = action.turn_ONLINE ? 3 : 4
      action.arrDraw_ONLINE.forEach(element => {
        stateClone[1][element] = action.turn_ONLINE ? 3 : 4
      })
      let newHistory = [stateClone[1].slice(), action.turn_ONLINE, action.id_ONLINE]
      stateClone[0].push(newHistory)
      stateClone[2] = stateClone[0].length - 1
      // console.log(stateClone)
      return stateClone
    }
    case HANDLE_CLICK.LOG_OUT: {
      return [[], Array(400).fill(0), 0]
    }
    default:
      return state
  }
}
