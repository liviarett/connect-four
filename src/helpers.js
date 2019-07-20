import styled from 'styled-components';

export const APP_BACKGROUND_COLOR = 'rgb(0, 0, 20)';
const GAME_BACKGROUND_COLOR = 'rgb(0, 0, 110)'
const GAME_CELL_OUTLINE_COLOR = 'rgb(0, 0, 170)'
const GAME_PIECE_OUTLINE_COLOR = 'rgb(0, 0, 70)'

export const areEqual = (a, b) => a[0] === b[0] && a[1] === b[1];

export const getValidNeighbours = (address, board) => {
  const validNeighbours = [];
  const neighbourDirections = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]]

  neighbourDirections.forEach(neighbourDirection => {
    const neighbourCell = [address[0] + neighbourDirection[0], address[1] + neighbourDirection[1]];
    if (board[neighbourCell[0]] && board[neighbourCell[0]][neighbourCell[1]]) {
      validNeighbours.push({
        ...board[neighbourCell[0]][neighbourCell[1]],
        direction: neighbourDirection,
      });
    }
  });
  return validNeighbours;
};

export const playerColors = {
  0: 'white',
  1: 'gold',
  2: 'red',
};

export const WithPlayerColor = styled.span`
  color: ${props => playerColors[props.player]};
`;

export const clearCanvas = (canvas) => {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export const drawGameBackground = (ctx, height, width) => {
  ctx.fillStyle = GAME_BACKGROUND_COLOR;
  ctx.fillRect(0, 0, height, width);
}

export const drawCellOutline = (ctx, columnWidth, rowHeight, columnIndex, rowIndex) => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = GAME_CELL_OUTLINE_COLOR;
  ctx.strokeRect((columnIndex * columnWidth), (rowIndex * rowHeight), columnWidth, rowHeight);
}

export const drawCellFill = (ctx, player, columnWidth, rowHeight, columnIndex, rowIndex) => {
  ctx.beginPath();
  ctx.fillStyle = !!player ? playerColors[player] : APP_BACKGROUND_COLOR;
  ctx.arc(columnWidth * columnIndex + columnWidth / 2, rowHeight * rowIndex + rowHeight / 2, (columnWidth * .8) / 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.strokeStyle = GAME_PIECE_OUTLINE_COLOR;
  ctx.lineWidth = 2;
  ctx.stroke();
}

export const drawWinner = (ctx, winner, canvas) => {
  ctx.font = "40px Roboto";
  ctx.textAlign = "center";
  ctx.lineWidth = .9;
  ctx.fillText(`Player ${winner} won!`, canvas.width/2, canvas.height/2);
  ctx.strokeText(`Player ${winner} won!`, canvas.width/2, canvas.height/2);
}