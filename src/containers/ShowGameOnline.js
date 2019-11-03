import { connect } from "react-redux";
import { toggleSquareOnline, clickRestartGameOnline, toggleHistoryOnline, changeSortHistoryOnline } from "../actions";
import GameOnline from "../components/GameOnline/GameOnline";

const mapStateToProps = state => ({
  squareOnline: state.squareOnline,
  turnOnline: state.turnOnline,
  isPlayingOnline: state.isPlayingOnline,
  historyOnline: state.historyOnline,
  sortTypeHistoryOnline: state.sortTypeHistoryOnline,
});

const mapDispatchToProps = dispatch => ({
  toggleSquareOnline: (id_Online, turn_Online) => dispatch(toggleSquareOnline(id_Online, turn_Online)),
  clickRestartGameOnline: () => dispatch(clickRestartGameOnline()),
  toggleHistoryOnline: (idHistory_Online) => dispatch(toggleHistoryOnline(idHistory_Online)),
  changeSortHistoryOnline: () => dispatch(changeSortHistoryOnline()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOnline);
