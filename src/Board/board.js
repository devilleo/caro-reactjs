import React from "react";
import Square from "../Square/square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whoNext: true,
      arr: Array(400).fill(0),
      arrColor: Array(400).fill(null),
      preventPlay: false,
      history: []
    };
    const {history} = this.state;
    const {callbackFromParent} = this.props;
    callbackFromParent(this.state, true, true, history);
  }

  resetGame = () => {
    const resetArr = []
    this.setState({
      whoNext: true,
      arr: Array(400).fill(0),
      preventPlay: false,
      history: resetArr
    });
    const {callbackFromParent} = this.props;
   callbackFromParent(this.state, true, true, []);
  };

  onPlay = index => {
    const { arr, preventPlay, whoNext, arrColor, history } = this.state;
    const {callbackFromParent} = this.props;

    if (arr[index] !== 0 || preventPlay === true) return;
    const newArr = arr.slice();
    newArr[index] = whoNext ? 1 : 2;

    const newArrColor = arrColor.slice();
    newArrColor[index] = whoNext ? "redColor" : "blueColor";

    const newHistory = history;
    for (let i = 0; i<newHistory.length;i+=1){
      newHistory[i][2]=false;
    }
    // para1: area, para2: turn, para3: set focus for list-group-item
    newHistory.push([index,whoNext,true])

    const whoNextVarForPassing = !whoNext;
    this.setState({
      whoNext: !whoNext,
      arr: newArr,
      arrColor: newArrColor
    });
    callbackFromParent(this.state, true, whoNextVarForPassing,newHistory);
    const arrTemp = this.isOver(index, newArr[index]);
    if (arrTemp !== false) {
      for(let j=0; j<arrTemp.length; j+=1){
        newArr[arrTemp[j]] = whoNext? 3:4;
      }
      this.setState({
        arr: newArr,
        preventPlay: true,
        history:[]
      })
      callbackFromParent(this.state, false, !whoNextVarForPassing,[]);
    }
  };
  
  // The following function has not been optimised yet. We recommend that you shouldn't read it, it's not good for your eyes ^^
  // Check game is Over?
  isOver = (index, value) => {
    const {arr} = this.state
    let count = 1;
    let increase = index;
    let continueIncrease = true;
    let decrease = index;
    let continueDecrease = true;
    let chan1dau = false;
    let chan2dau = false;
    let indexDrawArrs = [];
    indexDrawArrs.push(index);
    // eslint-disable-next-line no-constant-condition
    while (true) {
      while (continueDecrease){
        if (
          decrease - 20 >= 0 &&
          value === arr[decrease - 20] &&
          arr[decrease - 20] !== 0
        ) {
          count+=1;
          decrease -= 20;
          indexDrawArrs.push(decrease);
        } else if (
          decrease - 20 >= 0 &&
          value !== arr[decrease - 20] &&
          arr[decrease - 20] !== 0
        ) {
          chan1dau = true;
          continueDecrease = false;
        } else {
          continueDecrease = false;
        }
      }
      while (continueIncrease) {
        if (
          increase + 20 <= 399 &&
          value === arr[increase + 20] &&
          arr[increase + 20] !== 0
        ) {
          count+=1;
          increase += 20;
          indexDrawArrs.push(increase);
        } else if (
          increase + 20 <= 399 &&
          value !== arr[increase + 20] &&
          arr[increase + 20] !== 0
        ) {
          chan2dau = true;
          continueIncrease = false;
        } else {
          continueIncrease = false;
        }
      }
      if (continueIncrease === false && continueDecrease === false) break;
    }
    if (count >= 5 && (chan1dau === false || chan2dau === false)) return indexDrawArrs;
    if (count > 5) return indexDrawArrs;
    count = 1;
    increase = index;
    continueIncrease = true;
    decrease = index;
    continueDecrease = true;
    chan1dau = false;
    chan2dau = false;
    indexDrawArrs = [];
    indexDrawArrs.push(index);
    // eslint-disable-next-line no-constant-condition
    while (true) {
      while (continueDecrease){
        if (
          decrease % 20 !== 0 &&
          value === arr[decrease - 1] &&
          arr[decrease - 1] !== 0
        ) {
          count+=1;
          decrease -= 1;
          indexDrawArrs.push(decrease);
        } else if (
          decrease % 20 !== 0 &&
          value !== arr[decrease - 1] &&
          arr[decrease - 1] !== 0
        ) {
          chan1dau = true;
          continueDecrease = false;
        } else {
          continueDecrease = false;
        }
      }
      while (continueIncrease) {
        if (
          (increase - 19) % 20 !== 0 &&
          value === arr[increase + 1] &&
          arr[increase + 1] !== 0
        ) {
          count+=1;
          increase += 1;
          indexDrawArrs.push(increase);
        } else if (
          (increase - 19) % 20 !== 0 &&
          value !== arr[increase + 1] &&
          arr[increase + 1] !== 0
        ) {
          chan2dau = true;
          continueIncrease = false;
        } else {
          continueIncrease = false;
        }
      }
      if (continueIncrease === false && continueDecrease === false) break;
    }
    if (count >= 5 && (chan1dau === false || chan2dau === false)) return indexDrawArrs;
    if (count > 5) return indexDrawArrs;
    // hướng đi từ 1 xuống 9
    count = 1;
    increase = index;
    continueIncrease = true;
    decrease = index;
    continueDecrease = true;
    chan1dau = false;
    chan2dau = false;
    indexDrawArrs=[];
    indexDrawArrs.push(index);
    // eslint-disable-next-line no-constant-condition
    while (true) {
      while (continueDecrease){
        if (
          decrease - 21 >= 0 &&
          decrease % 20 !== 0 &&
          value === arr[decrease - 21] &&
          arr[decrease - 20 - 1] !== 0
        ) {
          count+=1;
          decrease -= 21;
          indexDrawArrs.push(decrease);
        } else if (
          decrease - 21 >= 0 &&
          decrease % 20 !== 0 &&
          value !== arr[decrease - 21] &&
          arr[decrease - 21] !== 0
        ) {
          chan1dau = true;
          continueDecrease = false;
        } else {
          continueDecrease = false;
        }
      }
      while (continueIncrease) {
        if (
          increase + 21 <= 399 &&
          increase % 20 !== 0 &&
          value === arr[increase + 21] &&
          arr[increase + 21] !== 0
        ) {
          count+=1;
          increase += 20 + 1;
          indexDrawArrs.push(increase);
        } else if (
          increase + 20 + 1 <= 399 &&
          increase % 20 !== 0 &&
          value !== arr[increase + 21] &&
          arr[increase + 21] !== 0
        ) {
          chan2dau = true;
          continueIncrease = false;
        } else {
          continueIncrease = false;
        }
      }
      if (continueIncrease === false && continueDecrease === false) break;
    }
    if (count >= 5 && (chan1dau === false || chan2dau === false)) return indexDrawArrs;
    if (count > 5) return indexDrawArrs;
    // hướng đi từ 3 xuống 7
    count = 1;
    increase = index;
    continueIncrease = true;
    decrease = index;
    continueDecrease = true;
    chan1dau = false;
    chan2dau = false;
    indexDrawArrs=[];
    indexDrawArrs.push(index);
    // eslint-disable-next-line no-constant-condition
    while (true) {
      while (continueDecrease){
        if (
          decrease - 19 >= 0 &&
          (decrease + 1) % 20 !== 0 &&
          value === arr[decrease - 19] &&
          arr[decrease - 19] !== 0
        ) {
          count+=1;
          decrease -= 19;
          indexDrawArrs.push(decrease);
        } else if (
          decrease - 19 >= 0 &&
          (decrease + 1) % 20 !== 0 &&
          value !== arr[decrease - 19] &&
          arr[decrease - 19] !== 0
        ) {
          chan1dau = true;
          continueDecrease = false;
        } else {
          continueDecrease = false;
        }
      }
      while (continueIncrease) {
        if (
          increase + 19 <= 399 &&
          increase % 20 !== 0 &&
          value === arr[increase + 19] &&
          arr[increase + 19] !== 0
        ) {
          count += 1;
          increase += 19;
          indexDrawArrs.push(increase);
        } else if (
          increase + 19 <= 399 
          && increase % 20 !== 0 
          && value !== arr[increase + 19] 
          && arr[increase + 19] !== 0
        ) {
          chan2dau = true;
          continueIncrease = false;
        } else {
          continueIncrease = false;
        }
      }
      if (continueIncrease === false && continueDecrease === false) break;
    }
    if (count ===  5 && (chan1dau === false || chan2dau === false)) return indexDrawArrs;
    if (count > 5) return indexDrawArrs;
    return false;
  };

  print() {
    const {arr, arrColor} = this.state;
    const arrPrint = [];
    const arrPrintParent = [];
    for (let i = 0; i < 400; i+=1) {
      const index = i;
      arrPrint.push(
        <Square
          key={i}
          changed={() => {
            this.onPlay(index);
          }}
          value={arr[i]}
          id={arrColor[i]}
        />
      );
    }
    for (let j = 0; j < 20; j+=1) {
      arrPrintParent.push(
        <div key={j} className="btn-group">
          {arrPrint.slice(20 * j, 20 * j + 20)}
        </div>
      );
    }
    return arrPrintParent;
  }

  reappearHistory(requiredHistory){
    const {length} = requiredHistory;
    const {callbackFromParent} = this.props;

    const newArrBoard = Array(400).fill(0);
    const newArrColor = Array(400).fill(null)
    for (let i = 0; i < length; i+=1){
      newArrBoard[requiredHistory[i][0]] = requiredHistory[i][1]? 1:2;
      newArrColor[requiredHistory[i][0]] = requiredHistory[i][1]? "redColor" : "blueColor";
    }
    const currentTurnRequired = !requiredHistory[length-1][1];
    this.setState({
      whoNext: currentTurnRequired,
      arr: newArrBoard,
      arrColor: newArrColor,
      history: requiredHistory
    })
   callbackFromParent(this.state, true, currentTurnRequired,requiredHistory);
  }

  render() {
    const {arr} = this.props;
    return <div className="board" arr={arr}>{this.print()}</div>;
  }
}

export default Board;
