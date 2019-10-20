import { connect } from "react-redux";
import { toggleSquare, clickRestartGame, toggleHistory } from "../actions";
import Game from "../components/Game";

const mapStateToProps = state => ({
  square: state.square,
  turn: state.turn,
  isPlaying: state.isPlaying,
  history: state.history,
});

const mapDispatchToProps = dispatch => ({
  toggleSquare: (id, turn) => dispatch(toggleSquare(id, turn)),
  clickRestartGame: () => dispatch(clickRestartGame()),
  toggleHistory: (idHistory) => dispatch(toggleHistory(idHistory)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
