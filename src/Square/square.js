import React from "react";

const Square = props => {
  const valueSquare=[['','btn-primary'],['X','btn-primary'],['O','btn-primary'],['X','win'],['O','win']]
  const {changed, id, value} = props
  return ( 
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={changed}
      id={id}
      className={`square btn btn-sm ${valueSquare[value][1]}`}
    >
      {valueSquare[value][0]}
    </button>
  );
};

export default Square;
