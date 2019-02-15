import React from 'react';
import Button from "./button";
import { WithPlayerColor } from "../helpers";

const Dashboard = ({ moves, currentPlayer, restartGame }) => (
    <div>
      <br />
      <div>Moves: { moves }</div>
      <br />
      <div>Now playing: <WithPlayerColor player={currentPlayer}><b>Player { currentPlayer }</b></WithPlayerColor></div>
      <Button handleClick={restartGame} text="Restart Game"/>
    </div>
)

export default Dashboard;
