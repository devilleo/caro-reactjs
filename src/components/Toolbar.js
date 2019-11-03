import React from "react"
import History from "./History"

const Toolbar = ({ props }) => {
  const { turn, isPlaying, clickRestartGame, changeSortHistory } = props
  return (
    <div className="col-md-4" id="toolbar">
      <div id="divImgCaro">
        <img id="imgCaro" src="caroImg.jpg" alt="ảnh nền" />
        <h1>Caro VN</h1>
      </div>
      <div>
        {isPlaying ? (
          <h2>Lượt chơi: {turn ? "X" : "O"}</h2>
        ) : (
          <h2>{!turn ? "X win" : "O win"}</h2>
        )}
      </div>
      <br />
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => clickRestartGame()}
        >
          Chơi lại
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => changeSortHistory()}
        >
          Sắp xếp
        </button>
      </div>

      <History props={props} />
    </div>
  )
}

export default Toolbar
