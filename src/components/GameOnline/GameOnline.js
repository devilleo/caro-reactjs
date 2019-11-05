import React, { useEffect } from "react"
import BoardOnline from "./BoardOnline"
import ToolbarOnline from "./ToolbarOnline"
import FindingAGame from "./FindingAGame"
import { enterRoomAgainAfterRefreshPage, findingRoom } from "../../Config/Socket"
const GameOnline = props => {
  const { isPlayingOnline, roomInfo, squareOnline, userInfo } = props
  useEffect(() => {
    /* componentDidMount code + componentDidUpdate code */
    if (roomInfo.idRoom !== -1){
      console.log("come here")
      enterRoomAgainAfterRefreshPage(roomInfo.idRoom)
    }
    return () => {
      /* componentWillUnmount code */
      console.log("disconnect to room")
    }
  }, [roomInfo.idRoom]) // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    roomInfo.enemy.email === undefined ?
    <FindingAGame props={props}></FindingAGame>
    :
    <div className="container-fluid">
      <div className="row">
        <div
          id={isPlayingOnline ? "" : "disabledbutton"}
          className="col-md-8 board-area"
        >
          <BoardOnline props={props} />
        </div>
        <ToolbarOnline props={props} />
      </div>
    </div>
  )
}

export default GameOnline
