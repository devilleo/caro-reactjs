import { TURN } from "../actions/actionType";

export const square = (state = Array(400).fill(0), action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE": {
      let stateClone = state.slice();
      stateClone[action.id] = action.turn ? 1 : 2;
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
    default:
      return state;
  }
};
