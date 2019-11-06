import React from 'react';

const HistoryOnline = ({props}) => {
  const arr = [];
  let toadoX = 0;
  let toadoY = 0;
  let displayTurn = '';
  const { historyOnline } = props;
  console.log(historyOnline)
  for (let i = 0; i < historyOnline.length; i += 1) {
    toadoX = historyOnline[i] % 20;
    toadoY = parseInt(historyOnline[i] / 20, 10);
    displayTurn = (i%2===0)? "X": "O";
    const element = (<li key={i}>
        <button
          className={
            i===historyOnline[2] ? 'list-group-item btn-in-li active' : 'list-group-item btn-in-li'
          }
          key={i}
          id={i}
          type="button"
        >
          Turn {i + 1}, {displayTurn}: [{toadoY},{toadoX}]
        </button>
      </li>);
    arr.unshift(element)
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