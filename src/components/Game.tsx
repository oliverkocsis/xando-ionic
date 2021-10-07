import React, { useState } from 'react';
import './Game.css';
import Grid from './Grid';
import { _, X, O } from './Players';

interface ContainerProps { }

export function initializeSpaces(): string[] {
  const grid = []
  for (let i = 0; i < 9; i++) {
    grid.push(_);
  }
  return grid;
}

export function whoDidWin(spaces: string[]): string {
  return _;
}

const Game: React.FC<ContainerProps> = () => {

  const [turn, setTurn] = useState(X);
  const [spaces, setSpaces] = useState(initializeSpaces());

  function mark(index: number) {
    console.log("mark " + index + " as " + turn);
    spaces[index] = turn;
    setSpaces(spaces);
    const winner = whoDidWin(spaces);
    if(winner == _) {
      setTurn(turn == X ? O : X);
    } else {
      console.log("winner is " + winner);
    }
    
  }

  return (
    <div className="game">
      <Grid spaces={spaces} mark={mark.bind(this)}></Grid>
    </div>
  );
};

export default Game;
