import React from "react";
import Square from "./Square";

const Board = ({props}) => {
  const { square, turn, toggleSquare } = props;
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
      <div className="board">{arrFather}</div>
  );
};

export default Board;
