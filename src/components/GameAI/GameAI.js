import React from "react";
import BoardAI from "./BoardAI";
import ToolbarAI from "./ToolbarAI"

const GameAI = props => {
  const {isPlayingAI} = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div id={isPlayingAI ? '' : 'disabledbutton'} className="col-md-8 board-area">       
          <BoardAI props={props}/>
        </div>
        <ToolbarAI props={props}/>
      </div>
    </div>
  );
};

export default GameAI;
