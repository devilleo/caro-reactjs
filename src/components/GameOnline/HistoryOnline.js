import React from 'react';

const HistoryOnline = ({props}) => {
  const arr = [];
  let toadoX = 0;
  let toadoY = 0;
  let displayTurn = '';
  const { historyOnline, toggleHistoryOnline, sortTypeHistoryOnline } = props;
  for (let i = 0; i < historyOnline[0].length; i += 1) {
    toadoX = historyOnline[0][i][2] % 20;
    toadoY = parseInt(historyOnline[0][i][2] / 20, 10);
    displayTurn = historyOnline[0][i][1]? "X": "O";
    const element = (<li key={i}>
        <button
          className={
            i===historyOnline[2] ? 'list-group-item btn-in-li active' : 'list-group-item btn-in-li'
          }
          key={i}
          id={i}
          onClick= {() => toggleHistoryOnline(i)}
          type="button"
        >
          Turn {i + 1}, {displayTurn}: [{toadoY},{toadoX}]
        </button>
      </li>);
    if (sortTypeHistoryOnline)
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

export default HistoryOnline;