import styled from 'styled-components';

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
  2: 'midnightblue',
};

export const WithPlayerColor = styled.span`
  color: ${props => playerColors[props.player]};
`;
