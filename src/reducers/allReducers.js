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

