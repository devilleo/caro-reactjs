import React from "react"
// import HistoryOnline from "./HistoryOnline";
import ChatBox from "./ChatBox"

const ToolbarOnline = ({ props }) => {
  const {
    turnOnline,
    isPlayingOnline,
    clickRestartGameOnline,
    changeSortHistoryOnline
  } = props
  return (
    <div className="col-md-4" id="toolbar">
      <div id="divImgCaro">
        <div className="row">
          <div className="col-md-6">
            <img id="imgCaroOnline" src="caroImg.jpg" alt="ảnh nền" />
          </div>
          <div className="col-md-6">
            <h1>1vs1 Online</h1>
            <div className="btn-group-vertical groupButtonWinDrawLose">
              <button
                type="button"
                className="btn btn-warning"
              >
                Tie Please!
              </button>
              <button
                type="button"
                className="btn btn-danger"
              >
                Im' lose!
              </button>
              <button
                type="button"
                className="btn btn-success"
              >
                Let me win!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isPlayingOnline ? (
          <h2>Lượt chơi: {turnOnline ? "X" : "O"}</h2>
        ) : (
          <h2>{!turnOnline ? "X win" : "O win"}</h2>
        )}
      </div>
      <br />
      {/* <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => clickRestartGameOnline()}
        >
          Chơi lại
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => changeSortHistoryOnline()}
        >
          Sắp xếp
        </button>
      </div> */}

      {/* <HistoryOnline props={props} /> */}
      <ChatBox props={props}></ChatBox>
    </div>
  )
}

export default ToolbarOnline
