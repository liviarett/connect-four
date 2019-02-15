import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './components/board';
import Dashboard from "./components/dashboard";
import Banner from "./components/banner";
import { areEqual, getValidNeighbours } from "./helpers";
import { playerColors } from './helpers';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  background-color: snow;
  font-family: Roboto, sans-serif;
  line-height: 1.5;
`;

const WIDTH = 7;
const HEIGHT = 6;

const initialState = {
  currentPlayer: 1,
  board: [],
  winner: null,
  moves: 0,
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  generateBoard = () => {
    const board = [];
    for (let i = 0; i < HEIGHT; i++) {
      const row = [];
      for (let k = 0; k < WIDTH; k++) {
        row.push({ player: 0, address: [i, k]});
      }
      board.push(row);
    }

    this.setState({
      board
    })
  }

  getNextPlayer = (currentPlayer) => {
    return currentPlayer === 1 ? 2 : 1;
  }

  handleClick = (address) => {
    const {
      currentPlayer,
      board,
      winner,
      moves,
    } = this.state;

    if (winner) {
      return;
    }
    const column = address[1];
    const boardCopy = board.slice(0);

    let i = HEIGHT - 1;

    while (boardCopy[i] && boardCopy[i][column].player !== 0) {
      i--;
    }

    if (!boardCopy[i]) {
      return;
    }

    const cell = boardCopy[i][column];

    const updatedCell = {
      ...cell,
      player: currentPlayer,
    }

    boardCopy[i][column] = updatedCell;

    this.setState({
      board: boardCopy,
      currentPlayer: this.getNextPlayer(currentPlayer),
      moves: moves + 1,
    })

    const finishGame = this.isGameFinished(updatedCell, board);

    if (finishGame) {
      this.setState({
        winner: currentPlayer
      });
    }
  }

  setWinner = (player) => {
    this.setState({
      winner: player
    });
  }

  isGameFinished = (cell, board, direction, connected = 1) => {
    if (connected === 4) {
      this.setWinner(this.state.currentPlayer);
    }
    const validNeighbours = getValidNeighbours(cell.address, board);

    validNeighbours.forEach(neighbour => {
      if (neighbour.player === cell.player && (!direction || areEqual(direction, neighbour.direction))) {
        this.isGameFinished(neighbour, board, neighbour.direction, connected + 1);
      }
    });
    return false;
  }

  restartGame = () => {
    this.setState({
      ...initialState
    });
    this.generateBoard();
  }

  componentDidMount() {
    this.generateBoard();
  }

  render() {
    const { currentPlayer, moves, board, winner } = this.state;
    return (
      <StyledApp className="App">
        { winner ? <Banner textColor={playerColors[winner]} message={`Player ${ this.state.winner } WON!`} /> : null}
        <div>
        { board.length && <Board board={board} handleClick={this.handleClick}/> }
        {
          <Dashboard currentPlayer={currentPlayer} moves={moves} restartGame={this.restartGame}/>
        }
        </div>
      </StyledApp>
    );
  }
}

export default App;
