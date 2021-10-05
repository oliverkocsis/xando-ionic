import React, { useState } from 'react';
import './Game.css';
import Grid from './Grid';
import { _, X, O } from './Players';

interface ContainerProps { }

function initializeSpaces(): string[] {
  const grid = []
  for (let i = 0; i < 9; i++) {
    grid.push(_);
  }
  return grid;
}

const Game: React.FC<ContainerProps> = () => {

  const [turn, setTurn] = useState(X);
  const [spaces, setSpaces] = useState(initializeSpaces());

  function mark(index: number) {
    console.log("Marked: " + index);
    spaces[index] = turn;
    setSpaces(spaces);
    setTurn(turn == X ? O : X);
  }

  return (
    <div className="game">
      <Grid spaces={spaces} mark={mark.bind(this)}></Grid>
    </div>
  );
};

export default Game;
