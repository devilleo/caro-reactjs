import React from "react"
import { cancelFindingRoom } from "../../Config/Socket"

const FindingAGame = ({ props }) => {
  const {userInfo, roomInfo, findingAGame_state, clickFindingAGame} = props
  console.log()
  return (
    <div style={{ display: "table", height: "90vh", width: "100vw" }}>
      <div
        style={{
          display: "table-cell",
          verticalAlign: "middle",
          textAlign: "center"
        }}
      >
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => cancelFindingRoom(roomInfo.idRoom)}
        >
          Cancel finding
        </button>
        {findingAGame_state.isFinding === false?  
        <button
          type="button"
          className="btn btn-info"
          onClick={() => clickFindingAGame()}
        >
          Find a battle
        </button>
        :
        <button class="btn btn-info" type="button" disabled>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Finding...
        </button>}
      </div>
    </div>
  )
}

export default FindingAGame
