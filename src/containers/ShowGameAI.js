import { connect } from "react-redux";
import { toggleSquareAI, clickRestartGameAI, toggleHistoryAI, changeSortHistoryAI } from "../actions";
import GameAI from "../components/GameAI/GameAI";

const mapStateToProps = state => ({
  squareAI: state.squareAI,
  turnAI: state.turnAI,
  isPlayingAI: state.isPlayingAI,
  historyAI: state.historyAI,
  sortTypeHistoryAI: state.sortTypeHistoryAI,
});

const mapDispatchToProps = dispatch => ({
  toggleSquareAI: (id_AI, turn_AI) => dispatch(toggleSquareAI(id_AI, turn_AI)),
  clickRestartGameAI: () => dispatch(clickRestartGameAI()),
  toggleHistoryAI: (idHistory_AI) => dispatch(toggleHistoryAI(idHistory_AI)),
  changeSortHistoryAI: () => dispatch(changeSortHistoryAI()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameAI);
