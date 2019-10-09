import { connect } from "react-redux";
import { toggleSquare, clickRestartGame } from "../actions";
import Board from "../components/Board";

const mapStateToProps = state => ({
  square: state.square,
  turn: state.turn,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
  toggleSquare: (id, turn) => dispatch(toggleSquare(id, turn)),
  clickRestartGame: () => dispatch(clickRestartGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
