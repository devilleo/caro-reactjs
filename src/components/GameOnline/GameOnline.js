import React from "react";
import BoardOnline from "./BoardOnline";
import ToolbarOnline from "./ToolbarOnline"

const GameOnline = props => {
  const {isPlayingOnline} = props;
  console.log(props)
  return (
    <div className="container-fluid">
      <div className="row">
        <div id={isPlayingOnline ? '' : 'disabledbutton'} className="col-md-8 board-area">       
          <BoardOnline props={props}/>
        </div>
        <ToolbarOnline props={props}/>
      </div>
    </div>
  );
};

export default GameOnline;
