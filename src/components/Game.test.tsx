import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';
import { whoDidWin } from './Game';
import { _, X, O } from './Players';

test('renders without crashing', () => {
  const { baseElement } = render(<Game />);
  expect(baseElement).toBeDefined();
});

test('empty: no winner', () => {
  const winner = whoDidWin([]);
  expect(winner).toBe(_);
});

test('x won horizontal', () => {
  const winner = whoDidWin([]);
  expect(winner).toBe(X);
});

test('o won vertical', () => {
  const winner = whoDidWin([]);
  expect(winner).toBe(O);
});

test('x won diagonal', () => {
  const winner = whoDidWin([]);
  expect(winner).toBe(X);
});

test('o won diagonal', () => {
  const winner = whoDidWin([]);
  expect(winner).toBe(O);
});

test('full: no winner', () => {
  const winner = whoDidWin([]);
  expect(winner).toBe(_);
});