import React, { Component } from 'react';
import './App.css';
import Board from './Board/board';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Popup from './Popup/Popup';

class App extends Component {
  constructor(props) {
    super(props);
    this.temp = React.createRef();
    this.state = {
      turn: null,
      playing: null,
      resetGame: false,
      showPopup: false,
      history: [],
      sortHistoryList: true
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  myCallback = (
    dataFromChild,
    playingFromChild,
    turnPlay,
    historyFromChild
  ) => {
    this.setState({
      turn: turnPlay,
      playing: playingFromChild,
      showPopup: !playingFromChild,
      history: historyFromChild
    });
  };

  // TODO
  resetGame = () => {
    this.temp.current.resetGame();
    this.setState({
      turn: true,
      playing: true
    });
  };

  reverseHistoryList = () => {
    const { sortHistoryList } = this.state;
    const reverseSort = !sortHistoryList;
    this.setState({
      sortHistoryList: reverseSort
    });
  };

  listItemClicked(e) {
    const newHistoryAfterChangeFocusRecord = [];
    const { history } = this.state;
    for (let i = 0; i <= e.currentTarget.id; i += 1) {
      newHistoryAfterChangeFocusRecord.push(history[i]);
    }

    for (let j = 0; j < newHistoryAfterChangeFocusRecord.length; j += 1) {
      newHistoryAfterChangeFocusRecord[j][2] = false;
    }
    newHistoryAfterChangeFocusRecord[e.currentTarget.id][2] = true;
    this.setState({
      history: newHistoryAfterChangeFocusRecord
    });
    this.temp.current.reappearHistory(newHistoryAfterChangeFocusRecord);
  }

  printHistory() {
    const arr = [];
    let toadoX = 0;
    let toadoY = 0;
    const { history } = this.state;
    for (let i = 0; i < history.length; i += 1) {
      toadoX = history[i][0] % 20;
      toadoY = parseInt(history[i][0] / 20, 10);
      arr.push(
        <li key={i}>
          <button
            className={
              history[i][2] ? 'list-group-item btn-in-li active' : 'list-group-item btn-in-li'
            }
            key={i}
            id={i}
            onClick={this.listItemClicked.bind(this)}
            type="button"
          >
            Turn {i + 1}: [{toadoY},{toadoX}]
          </button>
        </li>
      );
    }
    return arr;
  }

  render() {
    const {playing, resetGame, arr, turn, sortHistoryList, showPopup} = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            id={playing ? '' : 'disabledbutton'}
            className="col-md-8 board-area"
          >
            <Board
              ref={this.temp}
              resetGame={resetGame}
              callbackFromParent={this.myCallback}
              arr={arr}
            />
          </div>
          <div className="col-md-4" id="toolbar">
            <div id="divImgCaro">
              <img id="imgCaro" src="caroImg.jpg" alt="ảnh nền" />
              <h1>Caro VN</h1>
            </div>
            <div>
              <div>
                Lượt chơi:{' '}
                {turn ? 'Ms Sophia' : 'Mr Nguyen Huy Khanh'}
              </div>
            </div>
            <br/>
            <button type="button" onClick={this.resetGame} className="btn btn-success">
              Chơi lại
            </button>
            <button type="button" className="btn btn-info" onClick={this.reverseHistoryList}>
              Sắp xếp
            </button>
            <div className="history">
              <ul
                className={
                  sortHistoryList
                    ? 'list-group list-group-history'
                    : 'list-group list-group-history kha'
                }
              >
                {this.printHistory()}
              </ul>
            </div>
          </div>
        </div>
        {showPopup ? (
          <Popup
            text={
              turn
                ? 'Chúc mừng Ms Sophia'
                : 'Chúc mừng Mr Nguyen Huy Khanh'
            }
            closePopup={this.togglePopup}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
