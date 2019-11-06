import io from "socket.io-client"
import {IS_PLAYING_ONLINE} from "../actions/actionType"

const socket = io("http://localhost:5000/")


const configureSocket = dispatch => {
  // make sure our socket is connected to the port
  socket.on("connect", () => {
    console.log("connected to socket.io")
  })

  // the socket.on method is like an event listener
  // just like how our redux reducer works
  // the different actions that our socket/client will emit
  // is catched by these listeners

  socket.on("response finding room", (idRoom, isPlayer1) => {
    console.log("id room: ", idRoom)
    dispatch({
      type: "RESPONSE FINDING ROOM",
      idRoom: idRoom,
      isPlayer1: isPlayer1
    })
  })

  socket.on("reponse room info", room => {
    dispatch({
      type: "RESPONSE ROOM INFO",
      room: room
    })
  })

  socket.on("response newest message list", listMessageUpdated => {
    dispatch({
      type: "REPONSE NEWEST MESSAGE LIST",
      message: listMessageUpdated
    })
  })

  socket.on("reponse room info after refresh page", room => {
    if (room === null)
    {
      return
    }
    dispatch({
      type: "RESPONSE ROOM INFO",
      room: room
    })
  })
  socket.on("response newest board", arrSquare => {
    console.log("kha: newest board: ", arrSquare)
    dispatch({
      type: "UPDATE NEW BOARD FROM SERVER",
      arrSquare: arrSquare
    })
  })
  
  socket.on("response newest turn", newTurn => {
    console.log("kha: newest turn:", newTurn)
    dispatch({
      type: "UPDATE NEW TURN FROM SERVER", 
      newTurn: newTurn
    })
  })

  socket.on("response restart game request", () => {
    dispatch({
      type: "RESET BOARD FOR NEW GAME"
    })
  })

  socket.on("All members accept to play again", () => {
    dispatch({
      type: IS_PLAYING_ONLINE.START
    })
  })

  socket.on("response cancel finding room", () => {
    dispatch({
      type: "CANCEL_FINDING_A_GAME"
    })
    dispatch({
      type: "OUT_GAME"
    })
    console.log("cancel finding game...")
  })

  socket.on("enemy request a undo", () => {
    ("nhan duoc response tu enemy")
    dispatch({
      type: "OPEN_MODALREQUESTUNDO"
    })
  })

  socket.on("response undo request", (isAccepted,roomInfo) =>{
    console.log("did enemy accept undo: ", isAccepted)
    if (isAccepted === true){
      dispatch({
        type: "UPDATE NEW BOARD FROM SERVER",
        arrSquare: roomInfo.listSquareTogged
      })
      dispatch({
        type: "UPDATE NEW TURN FROM SERVER", 
        newTurn: roomInfo.currentTurn
      })
    }
  })

  socket.on("response update square and current turn after accept undo", roomInfo => {
    dispatch({
      type: "response update square and current turn after accept undo",
      roomInfo: roomInfo
    })
  })
  
  return socket
}

// the following are fucntions that our client side uses
// to emit actions to everyone connected to our web socket
export const findingRoom = userInfo => socket.emit("finding room", userInfo)
export const cancelFindingRoom = idRoom => socket.emit("cancel finding room (out of waiting room)", idRoom)
export const sendMessage = (idRoom, email, isPlayer1, message) =>{
  var today = new Date()
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  socket.emit("send message", idRoom, email, isPlayer1, message, time)
}
export const enterRoomAgainAfterRefreshPage = idRoom => {
  console.log("com hereeee")
  socket.emit("enter Room Again After Refresh Page", idRoom)
}

export const emitToggleSquare = (idSquare, idRoom) => {
  socket.emit("toggle squareeeee", idSquare, idRoom)
}

export const emitWinner = (isPlayer1, idRoom) => {
  socket.emit("emit winner", isPlayer1, idRoom)
}

export const emitRestartGameAfterGameOver = (idRoom) => {
  socket.emit("emit restart game after game over", idRoom)
}

export const emitRequestUndo = (idRoom, isPlayer1SendThisRequest) =>{
  socket.emit("emit request undo", idRoom, isPlayer1SendThisRequest)
}

export const emitResponseUndoRequest = (idRoom, isPlayer1SendThisRequest, isAccepted) => {
  socket.emit("emit response undo request", idRoom, isPlayer1SendThisRequest, isAccepted)
 }

 

export default configureSocket
