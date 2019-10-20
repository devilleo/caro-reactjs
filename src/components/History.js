import React from 'react';

const History = ({props}) => {
  const arr = [];
  let toadoX = 0;
  let toadoY = 0;
  const { history, toggleHistory } = props;
  for (let i = 0; i < history[0].length; i += 1) {
    toadoX = history[0][i][2] % 20;
    toadoY = parseInt(history[0][i][2] / 20, 10);
    arr.push(
      <li key={i}>
        <button
          className={
            i===history[2] ? 'list-group-item btn-in-li active' : 'list-group-item btn-in-li'
          }
          key={i}
          id={i}
          onClick= {() => toggleHistory(i)}
          type="button"
        >
          Turn {i + 1}: [{toadoY},{toadoX}]
        </button>
      </li>
    );
  }
    return(
        <div className="history">
              <ul
                // className={
                //   sortHistoryList
                //     ? 'list-group list-group-history'
                //     : 'list-group list-group-history kha'
                // }
              >
               {arr}
              </ul>
        </div>
    )
}

export default History;