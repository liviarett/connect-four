import React  from 'react';
import { drawGameBackground, clearCanvas, drawCellOutline, drawCellFill, drawWinner } from '../helpers';
import { useWindowSize } from '@react-hook/window-size'

const Board = ({ board, handleClick, winner }) => {
  const canvas = React.useRef(null);
  const [width] = useWindowSize(
    360,
    720,
    {fps: 16}
  )

  const HEIGHT = width > 600 ? 600 : width * .9;
  const WIDTH = width > 600 ? 600 : width * .9;
  const numberOfRows = board.length;
  const rowHeight = HEIGHT / numberOfRows;
  const numberOfColumns = board[0].length;
  const columnWidth = WIDTH / numberOfColumns;

  const getCurrentClickedCell = ([X, Y]) => {
    return [parseInt(Y/rowHeight), parseInt(X/columnWidth)];
  }

  const drawGame = () => setTimeout(() => {
    if (!canvas.current) {
      return drawGame();
    } else {
      const ctx = canvas.current.getContext('2d');

      clearCanvas(canvas.current);

      drawGameBackground(ctx, HEIGHT, WIDTH);

      board.forEach((row, i) => {
          row.forEach((cell, j) => {
            drawCellOutline(ctx, columnWidth, rowHeight, j, i);
            drawCellFill(ctx, cell.player, columnWidth, rowHeight, j, i);
        });
      });

      if (winner) {
        drawWinner(ctx, winner, canvas.current);
      }
    }
  })

  drawGame();

  return (
  <canvas
    ref={canvas}
    height={`${HEIGHT}px`}
    width={`${WIDTH}px`}
    onClick={(e) => {
      const clickPosition = [e.clientX - canvas.current.offsetLeft, e.clientY - canvas.current.offsetTop]
      handleClick(getCurrentClickedCell(clickPosition));
    }}
  ></canvas>
)};

export default Board;
