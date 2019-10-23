import { changeTurn, stopGame, draw } from "./actions/index";
import {
  setLoginPending,
  setLoginSuccess,
  setLoginError
} from "./actions/login_actions";
import { IS_PLAYING, TURN, LOGIN } from "./actions/actionType";
import { removeState } from "./localStorage/localStorage";

// condition for stop a game
const isOver = (arr, index, value) => {
  let count = 1;
  let increase = index;
  let continueIncrease = true;
  let decrease = index;
  let continueDecrease = true;
  let chan1dau = false;
  let chan2dau = false;
  let indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 20 >= 0 &&
        value === arr[decrease - 20] &&
        arr[decrease - 20] !== 0
      ) {
        count += 1;
        decrease -= 20;
        indexDrawArrs.push(decrease);
      } else if (
        decrease - 20 >= 0 &&
        value !== arr[decrease - 20] &&
        arr[decrease - 20] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        increase + 20 <= 399 &&
        value === arr[increase + 20] &&
        arr[increase + 20] !== 0
      ) {
        count += 1;
        increase += 20;
        indexDrawArrs.push(increase);
      } else if (
        increase + 20 <= 399 &&
        value !== arr[increase + 20] &&
        arr[increase + 20] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  count = 1;
  increase = index;
  continueIncrease = true;
  decrease = index;
  continueDecrease = true;
  chan1dau = false;
  chan2dau = false;
  indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease % 20 !== 0 &&
        value === arr[decrease - 1] &&
        arr[decrease - 1] !== 0
      ) {
        count += 1;
        decrease -= 1;
        indexDrawArrs.push(decrease);
      } else if (
        decrease % 20 !== 0 &&
        value !== arr[decrease - 1] &&
        arr[decrease - 1] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        (increase - 19) % 20 !== 0 &&
        value === arr[increase + 1] &&
        arr[increase + 1] !== 0
      ) {
        count += 1;
        increase += 1;
        indexDrawArrs.push(increase);
      } else if (
        (increase - 19) % 20 !== 0 &&
        value !== arr[increase + 1] &&
        arr[increase + 1] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  // hướng đi từ 1 xuống 9
  count = 1;
  increase = index;
  continueIncrease = true;
  decrease = index;
  continueDecrease = true;
  chan1dau = false;
  chan2dau = false;
  indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 21 >= 0 &&
        decrease % 20 !== 0 &&
        value === arr[decrease - 21] &&
        arr[decrease - 20 - 1] !== 0
      ) {
        count += 1;
        decrease -= 21;
        indexDrawArrs.push(decrease);
      } else if (
        decrease - 21 >= 0 &&
        decrease % 20 !== 0 &&
        value !== arr[decrease - 21] &&
        arr[decrease - 21] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        increase + 21 <= 399 &&
        increase % 20 !== 0 &&
        value === arr[increase + 21] &&
        arr[increase + 21] !== 0
      ) {
        count += 1;
        increase += 20 + 1;
        indexDrawArrs.push(increase);
      } else if (
        increase + 20 + 1 <= 399 &&
        increase % 20 !== 0 &&
        value !== arr[increase + 21] &&
        arr[increase + 21] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  // hướng đi từ 3 xuống 7
  count = 1;
  increase = index;
  continueIncrease = true;
  decrease = index;
  continueDecrease = true;
  chan1dau = false;
  chan2dau = false;
  indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 19 >= 0 &&
        (decrease + 1) % 20 !== 0 &&
        value === arr[decrease - 19] &&
        arr[decrease - 19] !== 0
      ) {
        count += 1;
        decrease -= 19;
        indexDrawArrs.push(decrease);
      } else if (
        decrease - 19 >= 0 &&
        (decrease + 1) % 20 !== 0 &&
        value !== arr[decrease - 19] &&
        arr[decrease - 19] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        increase + 19 <= 399 &&
        increase % 20 !== 0 &&
        value === arr[increase + 19] &&
        arr[increase + 19] !== 0
      ) {
        count += 1;
        increase += 19;
        indexDrawArrs.push(increase);
      } else if (
        increase + 19 <= 399 &&
        increase % 20 !== 0 &&
        value !== arr[increase + 19] &&
        arr[increase + 19] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count === 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  return false;
};

// api login
// function callLoginApi(email, password, callback) {

// }

export default store => next => action => {
  switch (action.type) {
    case "TOGGLE_SQUARE": {
      const { square } = store.getState();
      if (square[action.id] === 0) {
        store.dispatch(changeTurn());
        const arrDraw = isOver(square, action.id, action.turn ? 1 : 2);
        if (arrDraw) {
          store.dispatch(draw(arrDraw, action.turn));
          store.dispatch({
            type: "THE_LAST_UPDATE_IN_HISTORY_BEFORE_END_GAME",
            id: action.id,
            turn: action.turn,
            arrDraw: arrDraw
          });
          store.dispatch({ type: "RESET_HISTORY" });
          store.dispatch(stopGame());
        } else next(action);
      }
      break;
    }
    case IS_PLAYING.START: {
      store.dispatch({ type: "RESET_SQUARE" });
      store.dispatch({ type: TURN.RESET });
      store.dispatch({ type: "RESET_HISTORY" });
      next(action);
      break;
    }
    case "TOGGLE_HISTORY": {
      const { history } = store.getState();
      const historyForChange = history[0][action.idHistory][0].slice();
      // console.log(action.idHistory)
      // console.log(historyForChange)
      store.dispatch({
        type: "BACK_TO_HISTORY",
        historyForChange
      });

      const turn = !history[0][action.idHistory][1];
      store.dispatch({
        type: "TURN_IN_HISTORY",
        turn
      });
      next(action);
      break;
    }

    case LOGIN.SUBMIT: {
      store.dispatch(setLoginPending(true));
      store.dispatch(setLoginSuccess(false));
      store.dispatch(setLoginError(null));
      const { login } = store.getState();
      // callLoginApi(login.email, login.password, (error, response) => {
      //   store.dispatch(setLoginPending(false));
      //   console.log(error)
      //   if (!error) {
      //     console.log("vao day")
      //     store.dispatch(setLoginSuccess(true));
      //     store.dispatch({
      //       type: "Login_Success",
      //       email: login.email,
      //       token: response.token
      //     });
      //     next(action);
      //   } else {
      //     console.log("log in loi mat roi huhu")
      //     store.dispatch(setLoginError(error));
      //   }
      // });
      setTimeout(() => {
        fetch("https://restful-api-nodejs-1612278.herokuapp.com/users/login", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded" // <-- Specifying the Content-Type
          }),
          body: "email=" + login.email + "&password=" + login.password
          // mode: "no-cors"
        })
          .then(response => response.json())
          .then(response => {
            store.dispatch(setLoginPending(false));
            if (response.message !== "Login failed") {
              store.dispatch(setLoginSuccess(true));
              store.dispatch({
                type: "LOGIN_SUCCESS",
                email: login.email,
                token: response.token
              });
              console.log("Login success");

              console.log(store.getState());
            } else {
              console.log(response.message)
              store.dispatch(setLoginError(new Error("Invalid email or password")));
              store.dispatch({
                type: "LOGIN_FAILED"
              })
            };
          })
          .catch(error => {});
      }, 3000);
      break;
    }
    case "LOG_OUT": {
      store.dispatch(setLoginSuccess(false));
      removeState();
      next(action);
      break;
    }
    default:
      next(action);
  }
};
