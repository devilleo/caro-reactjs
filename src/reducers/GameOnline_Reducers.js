import {
  TURN_ONLINE,
  IS_PLAYING_ONLINE,
  HISTORY_SORT_ONLINE,
  HANDLE_CLICK
} from "../actions/actionType"

export const squareOnline = (state = Array(400).fill(0), action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE_ONLINE":
    case "TOGGLE_ONLINE_TURN": {
      console.log("toggled")
      let stateClone = state.slice()
      stateClone[action.id_ONLINE] = action.turn_ONLINE ? 1 : 2
      return stateClone
    }
    case "RESET_SQUARE_ONLINE": {
      console.log("reset toggled")
      let stateReset = Array(400).fill(0)
      return stateReset
    }
    case "DRAW_ONLINE": {
      let stateClone = state.slice()
      // console.log(action.arrDraw_ONLINE + " and " + action.turn_ONLINE)
      action.arrDraw_ONLINE.forEach(element => {
        stateClone[element] = action.turn_ONLINE ? 3 : 4
      })
      return stateClone
    }
    case "BACK_TO_HISTORY_ONLINE": {
      let newStateChangedByHistory = action.historyForChange_ONLINE.slice()
      return newStateChangedByHistory
    }
    case HANDLE_CLICK.LOG_OUT: {
      return Array(400).fill(0)
    }
    default:
      return state
  }
}

export const turnOnline = (state = true, action) => {
  switch (action.type) {
    case TURN_ONLINE.CHANGE: {
      return !state
    }
    case TURN_ONLINE.RESET: {
      return true
    }
    case "TURN_IN_HISTORY_ONLINE": {
      return action.turn_ONLINE
    }
    case HANDLE_CLICK.LOG_OUT: {
      return true
    }
    default:
      return state
  }
}

export const sortTypeHistoryOnline = (state = true, action) => {
  switch (action.type) {
    case HISTORY_SORT_ONLINE.CHANGE: {
      console.log("sort change toggled")
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
