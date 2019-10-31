import {
  TURN_AI,
  IS_PLAYING_AI,
  HISTORY_SORT_AI,
  HANDLE_CLICK,
} from "../actions/actionType"

export const squareAI = (state = Array(400).fill(0), action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE_AI": {
      let stateClone = state.slice()
      stateClone[action.id_AI] = action.turn_AI ? 1 : 2
      return stateClone
    }
    case "RESET_SQUARE_AI": {
      let stateReset = Array(400).fill(0)
      return stateReset
    }
    case "DRAW_AI": {
      let stateClone = state.slice()
      console.log(action.arrDraw_AI + " and " + action.turn_AI)
      action.arrDraw_AI.forEach(element => {
        stateClone[element] = action.turn_AI ? 3 : 4
      })
      return stateClone
    }
    case "BACK_TO_HISTORY_AI": {
      let newStateChangedByHistory = action.historyForChange_AI.slice()
      return newStateChangedByHistory
    }
    case HANDLE_CLICK.LOG_OUT: {
      return Array(400).fill(0)
    }
    default:
      return state
  }
}

export const turnAI = (state = true, action) => {
  switch (action.type) {
    case TURN_AI.CHANGE: {
      return !state
    }
    case TURN_AI.RESET: {
      return true
    }
    case "TURN_IN_HISTORY_AI": {
      return action.turn
    }
    case HANDLE_CLICK.LOG_OUT: {
      return true
    }
    default:
      return state
  }
}

export const sortTypeHistoryAI = (state = true, action) => {
  switch (action.type) {
    case HISTORY_SORT_AI.CHANGE: {
      return !state
    }
    case HANDLE_CLICK.LOG_OUT: {
      return true
    }
    default:
      return state
  }
}

export const isPlayingAI = (state = true, action) => {
  switch (action.type) {
    case IS_PLAYING_AI.STOP: {
      return false
    }
    case IS_PLAYING_AI.START: {
      return true
    }
    case HANDLE_CLICK.LOG_OUT: {
      return true
    }
    default:
      return state
  }
}

/* one state's element inclues:
      I.
        first param: list of history
        second param: turn at that time
        third param: the position was just toggled 
      II.
        param: the current board
      III.
        param: posision in history for focusing item
  */
export const historyAI = (state = [[], Array(400).fill(0), 0], action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE_AI": {
      let stateClone = state.slice()
      stateClone[1][action.id_AI] = action.turn_AI ? 1 : 2
      let newHistory = [stateClone[1].slice(), action.turn_AI, action.id_AI]
      stateClone[0].push(newHistory)
      stateClone[2] = stateClone[0].length - 1
      //   console.log(newHistory[0])
      return stateClone
    }
    case "TOGGLE_HISTORY_AI": {
      const stateClone = state.slice()
      stateClone[1] = []
      stateClone[1] = stateClone[0][action.idHistory_AI][0].slice()
      stateClone[2] = action.idHistory_AI
      return stateClone
    }
    case "RESET_HISTORY_AI": {
      return [[], Array(400).fill(0), 0]
    }
    case "THE_LAST_UPDATE_IN_HISTORY_BEFORE_END_GAME_AI": {
      let stateClone = state.slice()
      stateClone[1][action.id_AI] = action.turn_AI ? 3 : 4
      action.arrDraw_AI.forEach(element => {
        stateClone[1][element] = action.turn_AI ? 3 : 4
      })
      let newHistory = [stateClone[1].slice(), action.turn_AI, action.id_AI]
      stateClone[0].push(newHistory)
      stateClone[2] = stateClone[0].length - 1
      console.log(stateClone)
      return stateClone
    }
    case HANDLE_CLICK.LOG_OUT: {
      return [[], Array(400).fill(0), 0]
    }
    default:
      return state
  }
}
