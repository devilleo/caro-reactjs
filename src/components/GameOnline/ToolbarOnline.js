import React from "react"
// import HistoryOnline from "./HistoryOnline";
import ChatBox from "./ChatBox"
import { emitRestartGameAfterGameOver , cancelFindingRoom} from "../../Config/Socket"

const ToolbarOnline = ({ props }) => {
  const {
    turnOnline,
    isPlayingOnline,
    roomInfo,
    sendRequestUndo,
    sendRequestTie,
    sendRequestLose,
    statusOfGame,
    historyOnline
  } = props
  var theLastSquareToggled = {
    toadoX: historyOnline[historyOnline.length-1] % 20,
    toadoY: parseInt(historyOnline[historyOnline.length-1] / 20, 10),
    isPlayer1Toggled: turnOnline? "You":"Your enemy"
  }
  var whoWin
  if (statusOfGame === 1){
    if (roomInfo.areYouPlayer1 === true)
      whoWin = 'You win'
    else 
      whoWin = 'Your enemy win'
  }
  else if (statusOfGame === 2){
    if (roomInfo.areYouPlayer1 === true)
      whoWin = 'Your enemy win'
    else 
      whoWin = 'You win'
  }
  return (
    <div className="col-md-4" id="toolbar">
      <div id="divImgCaro">
        <div className="row">
          <div className="col-md-6">
            <img id="imgCaroOnline" src="caroImg.jpg" alt="ảnh nền" />
          </div>
          <div className="col-md-6">
            <h3>1vs1 Online</h3>
            <div className="btn-group-vertical groupButtonWinDrawLose">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => sendRequestTie()}
              >
                Tie Please!
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => sendRequestLose()}
              >
                Im' lose!
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => sendRequestUndo()}
              >
                Undo!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
          <h3 hidden={isPlayingOnline === false}>Current turn: {turnOnline ? "X" : "O"}</h3>
          <h3 hidden={statusOfGame===-1}>{statusOfGame===0? "Game Tie": whoWin}</h3>
      </div>
      <div>
        <div>You: {roomInfo.areYouPlayer1? "X":"O"}</div>
        <div>Your enemy: {roomInfo.areYouPlayer1? "O":"X"}</div>
      </div>
      <div hidden={historyOnline.length===0}>The last played: {theLastSquareToggled.isPlayer1Toggled} ({theLastSquareToggled.toadoY},{theLastSquareToggled.toadoX})</div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => cancelFindingRoom(roomInfo.idRoom)}
        >
          Out Game
        </button>
        <button
          type="button"
          className="btn btn-success"
          hidden = {isPlayingOnline? true:false}
          onClick={() => emitRestartGameAfterGameOver(roomInfo.idRoom)}
        >
          Chơi lại
        </button>
        
      </div>
      <ChatBox props={props}></ChatBox>
      {/* <HistoryOnline props={props} /> */}
    </div>
  )
}

export default ToolbarOnline
