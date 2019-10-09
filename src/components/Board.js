import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Board = props => {
  const { square, turn, toggleSquare } = props;
  console.log(props);
  let arrFather = [];
  for (let i = 0; i < 20; i += 1) {
    let arr = [];
    for (let j = 0; j < 20; j += 1) {
      const index = i * 20 + j;
      arr.push(
        <Square
          key={index}
          onClick={() => toggleSquare(index, turn)}
          value={square[index]}
          id={index}
        />
      );
    }
    arrFather.push(
      <div key={i} className="btn-group">
        {arr}
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 board-area">
          <div className="board">{arrFather}</div>
        </div>
        <div className="col-md-4" id="toolbar">
          <div id="divImgCaro">
            <img id="imgCaro" src="caroImg.jpg" alt="ảnh nền" />
            <h1>Caro VN</h1>
          </div>
          <div>
            <div>Lượt chơi: </div>
          </div>
          <br />
          <button type="button" className="btn btn-success">
            Chơi lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
