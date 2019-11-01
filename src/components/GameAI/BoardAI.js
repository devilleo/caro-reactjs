import React from "react";
import SquareAI from "./SquareAI";

const BoardAI = ({props}) => {
  const { squareAI, turnAI, toggleSquareAI, historyAI } = props;
  // console.log(historyAI[0][historyAI[2]]? historyAI[0][historyAI[2]][2]:"")
  var isFocus = -1
  if (historyAI[0][historyAI[2]]){
    isFocus = historyAI[0][historyAI[2]][2]
  }
  // console.log(squareAI)
  let arrFather = [];
  for (let i = 0; i < 20; i += 1) {
    let arr = [];
    for (let j = 0; j < 20; j += 1) {
      const index = i * 20 + j;
      arr.push(
        <SquareAI
          key={index}
          focus = {isFocus!==-1? isFocus:-1}
          onClick={() => toggleSquareAI(index, turnAI)}
          value={squareAI[index]}
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

export default BoardAI;
