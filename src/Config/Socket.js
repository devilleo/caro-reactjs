import io from "socket.io-client"
import {IS_PLAYING_ONLINE} from "../actions/actionType"

const socket = io("https://restful-api-nodejs-1612278.herokuapp.com/")


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
    console.log("nhan duoc response tu enemy")
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

  // tie
  socket.on("enemy request a tie", () => {
    console.log("nhan duoc request xin hoa` tu enemy")
    dispatch({
      type: "OPEN_MODALREQUESTTIE"
    })
  })

  socket.on("response tie request", (isAccepted,roomInfo) =>{
    console.log("did enemy accept tie: ", isAccepted)
    if (isAccepted === true){
      dispatch({
        type: IS_PLAYING_ONLINE.STOP
      })
      dispatch({
        type: "UPDATE NEW BOARD FROM SERVER",
        arrSquare: roomInfo.listSquareTogged
      })
      dispatch({
        type: "UPDATE NEW TURN FROM SERVER", 
        newTurn: roomInfo.currentTurn
      })
      dispatch({
        type: "UPDATE NOTIFICATION AFTER YOUR TIE REQUEST ACCEPT"
      })
    }
  })

  // socket.on("response reset game after accept tie", () => {
  //   dispatch({
  //     type: "response reset game after accept tie",
  //   })
  // })

  // lose
  socket.on("enemy request a lose", () => {
    console.log("nhan duoc request xin thua tu enemy")
    dispatch({
      type: "OPEN_MODALREQUESTLOSE"
    })
  })

  socket.on("response lose request", (isAccepted,roomInfo) =>{
    console.log("did enemy accept your lose: ", isAccepted)
    if (isAccepted === true){
      dispatch({
        type: IS_PLAYING_ONLINE.STOP
      })
      dispatch({
        type: "UPDATE NEW BOARD FROM SERVER",
        arrSquare: roomInfo.listSquareTogged
      })
      dispatch({
        type: "UPDATE NEW TURN FROM SERVER", 
        newTurn: roomInfo.currentTurn
      })
      dispatch({
        type: "UPDATE AFTER YOUR LOSE REQUEST ACCEPT"
      })
    }
  })

  // socket.on("response reset game after accept lose", () => {
  //   dispatch({
  //     type: "response reset game after accept lose",
  //   })
  // })
  
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


// undo
export const emitRequestUndo = (idRoom, isPlayer1SendThisRequest) =>{
  socket.emit("emit request undo", idRoom, isPlayer1SendThisRequest)
}

export const emitResponseUndoRequest = (idRoom, isPlayer1SendThisRequest, isAccepted) => {
  socket.emit("emit response undo request", idRoom, isPlayer1SendThisRequest, isAccepted)
 }


// tie
 export const emitRequestTie = (idRoom, isPlayer1SendThisRequest) =>{
  socket.emit("emit request tie", idRoom, isPlayer1SendThisRequest)
}

export const emitResponseTieRequest = (idRoom, isPlayer1SendThisRequest, isAccepted) => {
  socket.emit("emit response tie request", idRoom, isPlayer1SendThisRequest, isAccepted)
 }

 // lose
 export const emitRequestLose = (idRoom, isPlayer1SendThisRequest) =>{
  socket.emit("emit request lose", idRoom, isPlayer1SendThisRequest)
}

export const emitResponseLoseRequest = (idRoom, isPlayer1SendThisRequest, isAccepted) => {
  socket.emit("emit response lose request", idRoom, isPlayer1SendThisRequest, isAccepted)
 }

 

export default configureSocket
