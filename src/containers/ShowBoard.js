import { connect } from "react-redux";
import { toggleSquare } from "../actions";
import Board from "../components/Board";

const mapStateToProps = state => ({
  square: state.square,
  turn: state.turn
});

const mapDispatchToProps = dispatch => ({
  toggleSquare: (id, turn) => dispatch(toggleSquare(id, turn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
