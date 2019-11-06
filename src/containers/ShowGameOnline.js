import { connect } from "react-redux"
import {
  toggleSquareOnline,
  clickRestartGameOnline,
  toggleHistoryOnline,
  changeSortHistoryOnline,
  messageOnchange,
  removeMessageInBoxAfterSend,
  clickFindingAGame,
  closeModalRequestUndo,
  sendRequestUndo,
  closeModalRequestTie,
  closeModalRequestLose,
  sendRequestTie,
  setGameTie,
  stopGameOnline,
  sendRequestLose,
  setYouWinGame
} from "../actions"
import GameOnline from "../components/GameOnline/GameOnline"

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  squareOnline: state.squareOnline,
  turnOnline: state.turnOnline,
  isPlayingOnline: state.isPlayingOnline,
  historyOnline: state.historyOnline,
  sortTypeHistoryOnline: state.sortTypeHistoryOnline,
  roomInfo: state.roomInfo,
  message: state.message,
  findingAGame_state: state.findingAGame_state,
  modalRequestUndo: state.modalRequestUndo,
  modalRequestTie: state.modalRequestTie,
  modalRequestLose: state.modalRequestLose,
  statusOfGame: state.statusOfGame
})

const mapDispatchToProps = dispatch => ({
  toggleSquareOnline: (id_Online, turn_Online) =>
    dispatch(toggleSquareOnline(id_Online, turn_Online)),
  clickRestartGameOnline: () => dispatch(clickRestartGameOnline()),
  toggleHistoryOnline: idHistory_Online =>
    dispatch(toggleHistoryOnline(idHistory_Online)),
  changeSortHistoryOnline: () => dispatch(changeSortHistoryOnline()),
  messageOnchange: message => dispatch(messageOnchange(message)),
  removeMessageInBoxAfterSend: () => dispatch(removeMessageInBoxAfterSend()),
  clickFindingAGame: () => dispatch(clickFindingAGame()),
  closeModalRequestUndo: () => dispatch(closeModalRequestUndo()),
  sendRequestUndo: () => dispatch(sendRequestUndo()),
  closeModalRequestTie: () => dispatch(closeModalRequestTie()),
  closeModalRequestLose: () => dispatch(closeModalRequestLose()),
  sendRequestTie: () => dispatch(sendRequestTie()),
  setGameTie: () => dispatch(setGameTie()),
  sendRequestLose: () => dispatch(sendRequestLose()),
  setYouWinGame: (areYouPlayer1) => dispatch(setYouWinGame(areYouPlayer1)),
  stopGameOnline: () => dispatch(stopGameOnline())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOnline)
