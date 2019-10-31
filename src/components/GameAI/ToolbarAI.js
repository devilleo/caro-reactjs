import React from "react";
import HistoryAI from "./HistoryAI";

const ToolbarAI = ({ props }) => {
    const { turnAI, isPlayingAI, clickRestartGameAI, changeSortHistoryAI } = props;
    return (
        <div className="col-md-4" id="toolbar">
            <div id="divImgCaro">
                <img id="imgCaro" src="caroImg.jpg" alt="ảnh nền" />
                <h1>Caro VN</h1>
            </div>
            <div>
                {isPlayingAI ? <h2>Lượt chơi: {turnAI ? "X" : "O"}</h2> : <h2>{!turnAI ? "X win" : "O win"}</h2>}
            </div>
            <br />
            <button type="button" className="btn btn-success" onClick={() => clickRestartGameAI()}>
                Chơi lại
            </button>
            <button type="button" className="btn btn-info" onClick={() => changeSortHistoryAI()}>
                Sắp xếp
            </button>
            <HistoryAI props={props} />
        </div>
    );
};

export default ToolbarAI;
