import React from "react";
import PropTypes from "prop-types";

const Square = ({ onClick, id, value, focus }) => {
  const valueSquare = [
    ["", "btn-primary"],
    ["X", "btn-primary"],
    ["O", "btn-primary"],
    ["X", "win"],
    ["O", "win"]
  ];
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={onClick}
      id={id}
      className={`square btn btn-sm ${valueSquare[value][1]} ${focus===id? 'focus':''}`}
      style={{ color: (value === 1 || value === 3) ? "red" : "blue" }}
    >
      {valueSquare[value][0]}
    </button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default Square;
