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
  if (spaces[0] != _ && spaces[0] == spaces[1] && spaces[1] == spaces[2]) return spaces[0];
  if (spaces[3] != _ && spaces[3] == spaces[4] && spaces[4] == spaces[5]) return spaces[3];
  if (spaces[6] != _ && spaces[6] == spaces[7] && spaces[7] == spaces[8]) return spaces[6];
  if (spaces[0] != _ && spaces[0] == spaces[4] && spaces[4] == spaces[8]) return spaces[0];
  if (spaces[2] != _ && spaces[2] == spaces[4] && spaces[4] == spaces[6]) return spaces[2];
  if (spaces[0] != _ && spaces[0] == spaces[3] && spaces[3] == spaces[6]) return spaces[0];
  if (spaces[1] != _ && spaces[1] == spaces[4] && spaces[4] == spaces[7]) return spaces[1];
  if (spaces[2] != _ && spaces[2] == spaces[5] && spaces[5] == spaces[8]) return spaces[2];
  return _;
}

const Game: React.FC<ContainerProps> = () => {

  const [turn, setTurn] = useState(X);
  const [spaces, setSpaces] = useState(initializeSpaces());
  const [winner, setWinner] = useState(_);

  function mark(index: number) {
    if (winner == _) {
      console.log("mark " + index + " as " + turn);
      const newSpaces = [...spaces]
      newSpaces[index] = turn;
      setSpaces(newSpaces);
      const newWinner = whoDidWin(newSpaces);
      if (newWinner == _) {
        setTurn(turn == X ? O : X);
      } else {
        setWinner(newWinner);
        console.log("winner is " + newWinner);
      }
    }
  }

  return (
    <div className="game">
      <Grid spaces={spaces} mark={mark.bind(this)}></Grid>
    </div>
  );
};

export default Game;
