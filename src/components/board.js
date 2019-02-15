import React  from 'react';
import Cell from './cell';

const calculateClassName = (player) => player !== 0 ? 'animated slideInDown' : '';
const Board = ({ board, handleClick }) => (
    <div>
    { board.map((row, i) =>
        <div key={`Row-${i}`}>
      {row.map((cell, k) =>
          <Cell key={`Cell-${i}-${k}`} player={cell.player} className={calculateClassName(cell.player)} onClick={() => {
            handleClick(cell.address)
          }}/>
          )}
        </div>
    ) }
    </div>
);

export default Board;
