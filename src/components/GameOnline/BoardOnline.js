import React from "react";
import SquareOnline from "./SquareOnline";

const BoardOnline = ({props}) => {
  const { squareOnline, turnOnline, toggleSquareOnline, historyOnline } = props;
  var isFocus = -1
  if (historyOnline[0][historyOnline[2]]){
    isFocus = historyOnline[0][historyOnline[2]][2]
  }
  let arrFather = [];
  for (let i = 0; i < 20; i += 1) {
    let arr = [];
    for (let j = 0; j < 20; j += 1) {
      const index = i * 20 + j;
      arr.push(
        <SquareOnline
          key={index}
          focus = {isFocus!==-1? isFocus:-1}
          onClick={() => toggleSquareOnline(index, turnOnline)}
          value={squareOnline[index]}
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

export default BoardOnline;
