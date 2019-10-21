import { TURN, IS_PLAYING } from "../actions/actionType";

export const square = (state = Array(400).fill(0), action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE": {
      let stateClone = state.slice();
      stateClone[action.id] = action.turn ? 1 : 2;
      return stateClone;
    }
    case "RESET_SQUARE":{
      let stateReset = Array(400).fill(0)
      return stateReset
    }
    case "DRAW":{
      let stateClone = state.slice();
      action.arrDraw.forEach(element => {
        stateClone[element] = action.turn? 3:4
      });
      return stateClone;
    }
    case "BACK_TO_HISTORY": {
      let newStateChangedByHistory = action.historyForChange.slice();
      return newStateChangedByHistory;
    }
    default:
      return state;
  }
};

export const turn = (state = true, action) => {
  switch (action.type) {
    case TURN.CHANGE: {
      return !state;
    }
    case TURN.RESET: {
      return true
    }
    case "TURN_IN_HISTORY":{
      return action.turn
    }
    default:
      return state;
  }
};

export const isPlaying = (state = true, action) => {
  switch (action.type) {
    case IS_PLAYING.STOP:{
      return false;
    }
    case IS_PLAYING.START:{
      return true;
    }
    default:
      return state;
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
export const history = (state = [ [], Array(400).fill(0), 0], action) => {
  switch (action.type){
    case "TOGGLE_SQUARE": {
      let stateClone = state.slice();
      stateClone[1][action.id] = action.turn? 1:2;
      let newHistory = [stateClone[1].slice(),action.turn,action.id];
      stateClone[0].push(newHistory);
      stateClone[2] = stateClone[0].length - 1;
    //   console.log(newHistory[0])
      return stateClone;
    }
    case "TOGGLE_HISTORY":{
      const stateClone = state.slice();
      stateClone[1] = [];
      stateClone[1] = stateClone[0][action.idHistory][0].slice();
      stateClone[2] = action.idHistory;
      return stateClone;
    }
    case "RESET_HISTORY":{
      return [ [], Array(400).fill(0), 0];
    }
    case "THE_LAST_UPDATE_IN_HISTORY_BEFORE_END_GAME":{
      let stateClone = state.slice();
      stateClone[1][action.id] = action.turn? 3:4;
      action.arrDraw.forEach(element => {
        stateClone[1][element] = action.turn? 3:4;
      });
      let newHistory = [stateClone[1].slice(),action.turn,action.id];
      stateClone[0].push(newHistory);
      stateClone[2] = stateClone[0].length - 1;
      console.log(newHistory[0])
      return stateClone;
    }
    default: return state;
  }
}
