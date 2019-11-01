import React from 'react';

const HistoryAI = ({props}) => {
  const arr = [];
  let toadoX = 0;
  let toadoY = 0;
  let displayTurn = '';
  const { historyAI, toggleHistoryAI, sortTypeHistoryAI } = props;
  for (let i = 0; i < historyAI[0].length; i += 1) {
    toadoX = historyAI[0][i][2] % 20;
    toadoY = parseInt(historyAI[0][i][2] / 20, 10);
    displayTurn = historyAI[0][i][1]? "X": "O";
    const element = (<li key={i}>
        <button
          className={
            i===historyAI[2] ? 'list-group-item btn-in-li active' : 'list-group-item btn-in-li'
          }
          key={i}
          id={i}
          onClick= {() => toggleHistoryAI(i)}
          type="button"
        >
          Turn {i + 1}, {displayTurn}: [{toadoY},{toadoX}]
        </button>
      </li>);
    if (sortTypeHistoryAI)
        arr.push(
        element
        );
    else arr.unshift(element)
  }
    return(
        <div className="history">
              <ul className= 'list-group list-group-history'>
               {arr}
              </ul>
        </div>
    )
}

export default HistoryAI;