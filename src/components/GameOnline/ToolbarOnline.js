import React from "react";
import HistoryOnline from "./HistoryOnline";

const ToolbarOnline = ({ props }) => {
    const { turnOnline, isPlayingOnline, clickRestartGameOnline, changeSortHistoryOnline } = props;
    return (
        <div className="col-md-4" id="toolbar">
            <div id="divImgCaro">
                <img id="imgCaro" src="caroImg.jpg" alt="ảnh nền" />
                <h1>Online</h1>
            </div>
            <div>
                {isPlayingOnline ? <h2>Lượt chơi: {turnOnline ? "X" : "O"}</h2> : <h2>{!turnOnline ? "X win" : "O win"}</h2>}
            </div>
            <br />
            <button type="button" className="btn btn-success" onClick={() => clickRestartGameOnline()}>
                Chơi lại
            </button>
            <button type="button" className="btn btn-info" onClick={() => changeSortHistoryOnline()}>
                Sắp xếp
            </button>
            <HistoryOnline props={props} />
        </div>
    );
};

export default ToolbarOnline;
