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
  const spaces = [
    _, _, _,
    _, _, _,
    _, _, _,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(_);
});

test('x won horizontal top', () => {
  const spaces = [
    X, X, X,
    O, O, _,
    _, _, _,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(X);
});

test('x won horizontal bottom', () => {
  const spaces = [
    _, _, _,
    O, O, _,
    X, X, X,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(X);
});

test('o won horizontal middle', () => {
  const spaces = [
    X, X, _,
    O, O, O,
    X, _, _,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(O);
});

test('x won vertical center', () => {
  const spaces = [
    O, X, _,
    O, X, _,
    _, X, _,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(X);
});

test('o won vertical left', () => {
  const spaces = [
    O, X, X,
    O, X, _,
    O, _, _,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(O);
});

test('x won vertical right', () => {
  const spaces = [
    
    _, O, X,
    _, O, X,
    _, _, X,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(X);
});

test('x won diagonal', () => {
  const spaces = [
    X, O, _,
    _, X, O,
    _, _, X,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(X);
});

test('o won diagonal', () => {
  const spaces = [
    X, X, O,
    X, O, _,
    O, _, _,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(O);
});

test('full: no winner', () => {
  const spaces = [
    X, O, X,
    O, X, O,
    O, X, O,
  ]
  const winner = whoDidWin(spaces);
  expect(winner).toBe(_);
});