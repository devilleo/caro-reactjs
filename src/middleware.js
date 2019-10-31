import {
  IS_PLAYING,
  TURN,
  LOGIN,
  REGISTER,
  HANDLE_CLICK,
  HANDLE_USER_PROFILE,
  IS_PLAYING_AI,
  TURN_AI
} from "./actions/actionType"
import { changeTurn, stopGame, draw } from "./actions/index"
import { changeTurnAI, stopGameAI, drawAI } from "./actions/index"
import {
  setLoginPending,
  setLoginSuccess,
  setLoginError,
  LoginModalClose
} from "./actions/login_actions"
import {
  setRegisterPending,
  setRegisterSuccess,
  setRegisterError
} from "./actions/register_action"
import {
  setUpdateProfilePending,
  setUpdateProfileSuccess,
  setUpdateProfileError
} from "./actions/userProfile_actions"
// import { removeState } from "./localStorage/localStorage";

// condition for stop a game
const isOver = (arr, index, value) => {
  let count = 1
  let increase = index
  let continueIncrease = true
  let decrease = index
  let continueDecrease = true
  let chan1dau = false
  let chan2dau = false
  let indexDrawArrs = []
  indexDrawArrs.push(index)
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 20 >= 0 &&
        value === arr[decrease - 20] &&
        arr[decrease - 20] !== 0
      ) {
        count += 1
        decrease -= 20
        indexDrawArrs.push(decrease)
      } else if (
        decrease - 20 >= 0 &&
        value !== arr[decrease - 20] &&
        arr[decrease - 20] !== 0
      ) {
        chan1dau = true
        continueDecrease = false
      } else {
        continueDecrease = false
      }
    }
    while (continueIncrease) {
      if (
        increase + 20 <= 399 &&
        value === arr[increase + 20] &&
        arr[increase + 20] !== 0
      ) {
        count += 1
        increase += 20
        indexDrawArrs.push(increase)
      } else if (
        increase + 20 <= 399 &&
        value !== arr[increase + 20] &&
        arr[increase + 20] !== 0
      ) {
        chan2dau = true
        continueIncrease = false
      } else {
        continueIncrease = false
      }
    }
    if (continueIncrease === false && continueDecrease === false) break
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs
  if (count > 5) return indexDrawArrs
  count = 1
  increase = index
  continueIncrease = true
  decrease = index
  continueDecrease = true
  chan1dau = false
  chan2dau = false
  indexDrawArrs = []
  indexDrawArrs.push(index)
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease % 20 !== 0 &&
        value === arr[decrease - 1] &&
        arr[decrease - 1] !== 0
      ) {
        count += 1
        decrease -= 1
        indexDrawArrs.push(decrease)
      } else if (
        decrease % 20 !== 0 &&
        value !== arr[decrease - 1] &&
        arr[decrease - 1] !== 0
      ) {
        chan1dau = true
        continueDecrease = false
      } else {
        continueDecrease = false
      }
    }
    while (continueIncrease) {
      if (
        (increase - 19) % 20 !== 0 &&
        value === arr[increase + 1] &&
        arr[increase + 1] !== 0
      ) {
        count += 1
        increase += 1
        indexDrawArrs.push(increase)
      } else if (
        (increase - 19) % 20 !== 0 &&
        value !== arr[increase + 1] &&
        arr[increase + 1] !== 0
      ) {
        chan2dau = true
        continueIncrease = false
      } else {
        continueIncrease = false
      }
    }
    if (continueIncrease === false && continueDecrease === false) break
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs
  if (count > 5) return indexDrawArrs
  // hướng đi từ 1 xuống 9
  count = 1
  increase = index
  continueIncrease = true
  decrease = index
  continueDecrease = true
  chan1dau = false
  chan2dau = false
  indexDrawArrs = []
  indexDrawArrs.push(index)
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 21 >= 0 &&
        decrease % 20 !== 0 &&
        value === arr[decrease - 21] &&
        arr[decrease - 20 - 1] !== 0
      ) {
        count += 1
        decrease -= 21
        indexDrawArrs.push(decrease)
      } else if (
        decrease - 21 >= 0 &&
        decrease % 20 !== 0 &&
        value !== arr[decrease - 21] &&
        arr[decrease - 21] !== 0
      ) {
        chan1dau = true
        continueDecrease = false
      } else {
        continueDecrease = false
      }
    }
    while (continueIncrease) {
      if (
        increase + 21 <= 399 &&
        increase % 20 !== 0 &&
        value === arr[increase + 21] &&
        arr[increase + 21] !== 0
      ) {
        count += 1
        increase += 20 + 1
        indexDrawArrs.push(increase)
      } else if (
        increase + 20 + 1 <= 399 &&
        increase % 20 !== 0 &&
        value !== arr[increase + 21] &&
        arr[increase + 21] !== 0
      ) {
        chan2dau = true
        continueIncrease = false
      } else {
        continueIncrease = false
      }
    }
    if (continueIncrease === false && continueDecrease === false) break
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs
  if (count > 5) return indexDrawArrs
  // hướng đi từ 3 xuống 7
  count = 1
  increase = index
  continueIncrease = true
  decrease = index
  continueDecrease = true
  chan1dau = false
  chan2dau = false
  indexDrawArrs = []
  indexDrawArrs.push(index)
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 19 >= 0 &&
        (decrease + 1) % 20 !== 0 &&
        value === arr[decrease - 19] &&
        arr[decrease - 19] !== 0
      ) {
        count += 1
        decrease -= 19
        indexDrawArrs.push(decrease)
      } else if (
        decrease - 19 >= 0 &&
        (decrease + 1) % 20 !== 0 &&
        value !== arr[decrease - 19] &&
        arr[decrease - 19] !== 0
      ) {
        chan1dau = true
        continueDecrease = false
      } else {
        continueDecrease = false
      }
    }
    while (continueIncrease) {
      if (
        increase + 19 <= 399 &&
        increase % 20 !== 0 &&
        value === arr[increase + 19] &&
        arr[increase + 19] !== 0
      ) {
        count += 1
        increase += 19
        indexDrawArrs.push(increase)
      } else if (
        increase + 19 <= 399 &&
        increase % 20 !== 0 &&
        value !== arr[increase + 19] &&
        arr[increase + 19] !== 0
      ) {
        chan2dau = true
        continueIncrease = false
      } else {
        continueIncrease = false
      }
    }
    if (continueIncrease === false && continueDecrease === false) break
  }
  if (count === 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs
  if (count > 5) return indexDrawArrs
  return false
}

// api login
// function callLoginApi(email, password, callback) {

// }
function validateEmail(email) {
  // eslint-disable-next-line
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function validatePassword(password) {
  if (password.length < 6) return "the password must be more then 6 characters."
  return ""
}

function validateInputOfProfile(displayName, value) {
  if (value.length < 1 || value === null || value === undefined)
    return displayName + " doesn't have value. Please input."
  return ""
}

export default store => next => action => {
  switch (action.type) {
    case "TOGGLE_SQUARE": {
      const { square } = store.getState()
      if (square[action.id] === 0) {
        store.dispatch(changeTurn())
        const arrDraw = isOver(square, action.id, action.turn ? 1 : 2)
        if (arrDraw) {
          store.dispatch(draw(arrDraw, action.turn))
          store.dispatch({
            type: "THE_LAST_UPDATE_IN_HISTORY_BEFORE_END_GAME",
            id: action.id,
            turn: action.turn,
            arrDraw: arrDraw
          })
          store.dispatch({ type: "RESET_HISTORY" })
          store.dispatch(stopGame())
        } else next(action)
      }
      break
    }
    case IS_PLAYING.START: {
      store.dispatch({ type: "RESET_SQUARE" })
      store.dispatch({ type: TURN.RESET })
      store.dispatch({ type: "RESET_HISTORY" })
      next(action)
      break
    }
    case "TOGGLE_HISTORY": {
      const { history } = store.getState()
      const historyForChange = history[0][action.idHistory][0].slice()
      // console.log(action.idHistory)
      // console.log(historyForChange)
      store.dispatch({
        type: "BACK_TO_HISTORY",
        historyForChange
      })

      const turn = !history[0][action.idHistory][1]
      store.dispatch({
        type: "TURN_IN_HISTORY",
        turn
      })
      next(action)
      break
    }
    // play with AI
    case "TOGGLE_SQUARE_AI": {
      const { squareAI } = store.getState()
      if (squareAI[action.id_AI] === 0) {
        store.dispatch(changeTurnAI())
        const arrDraw_AI = isOver(squareAI, action.id_AI, action.turn_AI ? 1 : 2)
        // console.log(action.turn_AI)
        if (arrDraw_AI) {
          store.dispatch(drawAI(arrDraw_AI, action.turn_AI))
          store.dispatch({
            type: "THE_LAST_UPDATE_IN_HISTORY_BEFORE_END_GAME_AI",
            id_AI: action.id_AI,
            turn_AI: action.turn_AI,
            arrDraw_AI: arrDraw_AI
          })
          store.dispatch({ type: "RESET_HISTORY_AI" })
          store.dispatch(stopGameAI())
        } else next(action)
      }
      break
    }
    case IS_PLAYING_AI.START: {
      store.dispatch({ type: "RESET_SQUARE_AI" })
      store.dispatch({ type: TURN_AI.RESET })
      store.dispatch({ type: "RESET_HISTORY_AI" })
      next(action)
      break
    }
    case "TOGGLE_HISTORY_AI": {
      const { historyAI } = store.getState()
      const historyForChange_AI = historyAI[0][action.idHistory_AI][0].slice()
      // console.log(action.idHistory)
      // console.log(historyForChange)
      store.dispatch({
        type: "BACK_TO_HISTORY",
        historyForChange_AI
      })

      const turn_AI = !historyAI[0][action.idHistory_AI][1]
      store.dispatch({
        type: "TURN_IN_HISTORY_AI",
        turn_AI
      })
      next(action)
      break
    }

    case LOGIN.SUBMIT: {
      store.dispatch(setLoginPending(true))
      store.dispatch(setLoginSuccess(false))
      store.dispatch(setLoginError(null))
      const { login } = store.getState()
      if (!validateEmail(login.email)) {
        store.dispatch(setLoginError(new Error("Email is not valid.")))
        store.dispatch(setLoginPending(false))
        store.dispatch(setLoginSuccess(false))
        return
      }
      var validatePassLogin = validatePassword(login.password)
      if (validatePassLogin !== "") {
        store.dispatch(setLoginError(new Error(validatePassLogin)))
        store.dispatch(setLoginPending(false))
        store.dispatch(setLoginSuccess(false))
        return
      }
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
            store.dispatch(setLoginPending(false))
            var token = response.token
            if (response.user !== false) {
              store.dispatch(setLoginSuccess(true))
              getUserInfo(response.token).then(response => {
                if (response !== false) {
                  store.dispatch({
                    type: "LOGIN_SUCCESS",
                    user: Object.assign({}, response, {
                      token: token
                    })
                  })
                  store.dispatch(LoginModalClose())
                  console.log("Login success")
                } else {
                  // error of get UserInfo
                  // TODO
                }
              })

              // console.log(store.getState())
            } else {
              store.dispatch(
                setLoginError(new Error("Incorrect email or password."))
              )
              store.dispatch({
                type: "LOGIN_FAILED"
              })
            }
          })
          .catch(error => {})
      }, 1)
      break
    }
    case HANDLE_CLICK.LOG_OUT: {
      store.dispatch(setLoginSuccess(false))
      store.dispatch(setRegisterSuccess(false))
      //   removeState();
      next(action)
      break
    }
    case REGISTER.SUBMIT: {
      store.dispatch(setRegisterPending(true))
      store.dispatch(setRegisterSuccess(false))
      store.dispatch(setRegisterError(null))
      const { register } = store.getState()
      // console.log(register)
      if (!validateEmail(register.email)) {
        store.dispatch(setRegisterError(new Error("Email is not valid.")))
        store.dispatch(setRegisterPending(false))
        store.dispatch(setRegisterSuccess(false))
        return
      }
      var validatePassRegister = validatePassword(register.password)
      if (validatePassRegister !== "") {
        store.dispatch(setRegisterError(new Error(validatePassRegister)))
        store.dispatch(setRegisterPending(false))
        store.dispatch(setRegisterSuccess(false))
        return
      }
      if (register.password !== register.passwordConfirm) {
        store.dispatch(
          setRegisterError(new Error("Password Confirm doesn't match."))
        )
        store.dispatch(setRegisterPending(false))
        store.dispatch(setRegisterSuccess(false))
        return
      }
      setTimeout(() => {
        fetch(
          "https://restful-api-nodejs-1612278.herokuapp.com/users/register",
          {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/x-www-form-urlencoded" // <-- Specifying the Content-Type
            }),
            body: "email=" + register.email + "&password=" + register.password
            // mode: "no-cors"
          }
        )
          .then(response => response.json())
          .then(response => {
            store.dispatch(setRegisterPending(false))
            if (
              response.message !==
              "Failed to create new User, Email has been registed before."
            ) {
              store.dispatch(setRegisterSuccess(true))
              console.log("register success")
              store.dispatch(setRegisterError(null))
              next(action)
            } else {
              console.log(response.message)
              var error = response.message
              store.dispatch(setRegisterError(new Error(error)))
              store.dispatch({
                type: "REGISTER_FAILED"
              })
            }
          })
          .catch(error => {})
      }, 1)
      break
    }
    case HANDLE_USER_PROFILE.UPDATE: {
      console.log("vao day")
      store.dispatch(setUpdateProfilePending(true))
      store.dispatch(setUpdateProfileSuccess(false))
      store.dispatch(setUpdateProfileError(null))
      const { userInfoForUpdateProfile, userInfo } = store.getState()

      // valid input value before fetching
      const validateFirstName = validateInputOfProfile(
        "FirstName",
        userInfoForUpdateProfile.firstName
      )
      if (validateFirstName !== "") {
        store.dispatch(setUpdateProfilePending(false))
        store.dispatch(setUpdateProfileSuccess(false))
        store.dispatch(setUpdateProfileError(new Error(validateFirstName)))
        return
      }
      const validateLastName = validateInputOfProfile(
        "LastName",
        userInfoForUpdateProfile.lastName
      )
      if (validateLastName !== "") {
        store.dispatch(setUpdateProfilePending(false))
        store.dispatch(setUpdateProfileSuccess(false))
        store.dispatch(setUpdateProfileError(new Error(validateLastName)))
        return
      }
      const validateAddress = validateInputOfProfile(
        "Address",
        userInfoForUpdateProfile.address
      )
      if (validateAddress !== "") {
        store.dispatch(setUpdateProfilePending(false))
        store.dispatch(setUpdateProfileSuccess(false))
        store.dispatch(setUpdateProfileError(new Error(validateAddress)))
        return
      }
      const validateCity = validateInputOfProfile(
        "City",
        userInfoForUpdateProfile.city
      )
      if (validateCity !== "") {
        store.dispatch(setUpdateProfilePending(false))
        store.dispatch(setUpdateProfileSuccess(false))
        store.dispatch(setUpdateProfileError(new Error(validateCity)))
        return
      }
      const validateCountry = validateInputOfProfile(
        "Country",
        userInfoForUpdateProfile.country
      )
      if (validateCountry !== "") {
        store.dispatch(setUpdateProfilePending(false))
        store.dispatch(setUpdateProfileSuccess(false))
        store.dispatch(setUpdateProfileError(new Error(validateCountry)))
        return
      }
      const validateAboutMe = validateInputOfProfile(
        "About Me",
        userInfoForUpdateProfile.aboutMe
      )
      if (validateAboutMe !== "") {
        store.dispatch(setUpdateProfilePending(false))
        store.dispatch(setUpdateProfileSuccess(false))
        store.dispatch(setUpdateProfileError(new Error(validateAboutMe)))
        return
      }
      // fetching...
      fetch("https://restful-api-nodejs-1612278.herokuapp.com/me/update", {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
          secret_token: userInfo.token
        }),
        body:
          "firstName=" +
          userInfoForUpdateProfile.firstName +
          "&lastName=" +
          userInfoForUpdateProfile.lastName +
          "&address=" +
          userInfoForUpdateProfile.address +
          "&city=" +
          userInfoForUpdateProfile.city +
          "&country=" +
          userInfoForUpdateProfile.country +
          "&aboutMe=" +
          userInfoForUpdateProfile.aboutMe
        // mode: "no-cors"
      })
        .then(response => response.json())
        .then(response => {
          store.dispatch(setUpdateProfilePending(false))
          // console.log(response)
          if (response.message === "Update complete") {
            store.dispatch(setUpdateProfileSuccess(true))
            store.dispatch({
              type: "UPDATE_PROFILE_SUCCESS",
              userInfoForUpdateProfile
            })
            // console.log(store.getState())
          } else {
            store.dispatch(
              setUpdateProfileError(new Error("Update Profile error."))
            )
          }
        })
        .catch(error => {})
      break
    }
    default:
      next(action)
  }
}

const getUserInfo = async token => {
  var user = false
  await fetch("https://restful-api-nodejs-1612278.herokuapp.com/me", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      secret_token: token
    })
    // mode: "no-cors"
  })
    .then(response => response.json())
    .then(response => {
      if (response.message === "Get User's Profile success !!!") {
        user = response.user
      } else {
        return false
      }
    })
    .catch(error => {})

  return user
}
