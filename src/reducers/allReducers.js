import {
  TURN,
  IS_PLAYING,
  HISTORY_SORT,
  LOGIN_STATE,
  LOGIN,
  REGISTER_STATE,
  REGISTER,
  LOGIN_MODAL
} from "../actions/actionType";

export const square = (state = Array(400).fill(0), action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE": {
      let stateClone = state.slice();
      stateClone[action.id] = action.turn ? 1 : 2;
      return stateClone;
    }
    case "RESET_SQUARE": {
      let stateReset = Array(400).fill(0);
      return stateReset;
    }
    case "DRAW": {
      let stateClone = state.slice();
      action.arrDraw.forEach(element => {
        stateClone[element] = action.turn ? 3 : 4;
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
      return true;
    }
    case "TURN_IN_HISTORY": {
      return action.turn;
    }
    default:
      return state;
  }
};

export const sortTypeHistory = (state = true, action) => {
  switch (action.type) {
    case HISTORY_SORT.CHANGE: {
      return !state;
    }
    default:
      return state;
  }
};

export const isPlaying = (state = true, action) => {
  switch (action.type) {
    case IS_PLAYING.STOP: {
      return false;
    }
    case IS_PLAYING.START: {
      return true;
    }
    default:
      return state;
  }
};

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
export const history = (state = [[], Array(400).fill(0), 0], action) => {
  switch (action.type) {
    case "TOGGLE_SQUARE": {
      let stateClone = state.slice();
      stateClone[1][action.id] = action.turn ? 1 : 2;
      let newHistory = [stateClone[1].slice(), action.turn, action.id];
      stateClone[0].push(newHistory);
      stateClone[2] = stateClone[0].length - 1;
      //   console.log(newHistory[0])
      return stateClone;
    }
    case "TOGGLE_HISTORY": {
      const stateClone = state.slice();
      stateClone[1] = [];
      stateClone[1] = stateClone[0][action.idHistory][0].slice();
      stateClone[2] = action.idHistory;
      return stateClone;
    }
    case "RESET_HISTORY": {
      return [[], Array(400).fill(0), 0];
    }
    case "THE_LAST_UPDATE_IN_HISTORY_BEFORE_END_GAME": {
      let stateClone = state.slice();
      stateClone[1][action.id] = action.turn ? 3 : 4;
      action.arrDraw.forEach(element => {
        stateClone[1][element] = action.turn ? 3 : 4;
      });
      let newHistory = [stateClone[1].slice(), action.turn, action.id];
      stateClone[0].push(newHistory);
      stateClone[2] = stateClone[0].length - 1;
      return stateClone;
    }
    default:
      return state;
  }
};

export const userInfo = (
  state = { email: "", password: "", token: "" },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      // console.log(localStorage)
      return Object.assign({}, state, {
        email: action.email,
        token: action.token
      });
    }
    case "LOGIN_FAILED":{
      return { email: "", password: "", token: "" };
    }
    case "LOG_OUT": {
      console.log("Log out!");
      return { email: "", password: "", token: "" };
    }
    default:
      return state;
  }
};

export const login = (
  state = { email: "", password: ""},
  action
) => {
  switch (action.type) {
    case LOGIN.EMAIL_ONCHANGE: {
      return Object.assign({}, state, { email: action.email });
    }
    case LOGIN.PASSWORD_ONCHANGE: {
      return Object.assign({}, state, { password: action.password });
    }
    case LOGIN.SUBMIT: {
      console.log("Login Successful");
      return state;
    }

    default:
      return state;
  }
};

export const login_state = (
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
  },
  action
) => {
  switch (action.type) {
    case LOGIN_STATE.PENDING: {
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });
    }
    case LOGIN_STATE.SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case LOGIN_STATE.ERROR:
      return Object.assign({}, state, {
        loginError: action.isLoginError
      });

    default:
      return state;
  }
};

export const register = (
  state = { email: "", password: "", passwordConfirm: ""},
  action
) => {
  switch (action.type) {
    case REGISTER.EMAIL_REGISTER_ONCHANGE: {
      return Object.assign({}, state, { email: action.email });
    }
    case REGISTER.PASSWORD_REGISTER_ONCHANGE: {
      return Object.assign({}, state, { password: action.password });
    }
    case REGISTER.PASSWORD_CONFIRM_REGISTER_ONCHANGE: {
      return Object.assign({}, state, { passwordConfirm: action.passwordConfirm });
    }
    case REGISTER.SUBMIT: {
      console.log("Register Successful");
      return { email: "", password: "", passwordConfirm: ""};
    }
    case "REGISTER_FAILED": {
      return state;
    }

    default:
      return state;
  }
};

export const register_state = (
  state = {
    isRegisterSuccess: false,
    isRegisterPending: false,
    registernError: null
  },
  action
) => {
  switch (action.type) {
    case REGISTER_STATE.PENDING: {
      return Object.assign({}, state, {
        isRegisterPending: action.isRegisterPending
      });
    }
    case REGISTER_STATE.SUCCESS:
      return Object.assign({}, state, {
        isRegisterSuccess: action.isRegisterSuccess
      });
    case REGISTER_STATE.ERROR:
      return Object.assign({}, state, {
        registerError: action.isRegisterError
      })
    default:
      return state;
  }
};

export const login_modal = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case LOGIN_MODAL.OPEN: {
            return Object.assign({},state,{
                isOpen: true
            })
        }
        case LOGIN_MODAL.CLOSE: {
            return Object.assign({},state,{
                isOpen: false
            })
        }
        default: return state
    }
}
