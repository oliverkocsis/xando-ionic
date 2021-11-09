import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';
import { _, X, O } from './Players';

const spaces = [
  _, X, O,
  O, _, X,
  X, O, _,
]

const mark = jest.fn((index) => { });

test('renders without crashing', () => {
  const { baseElement, getAllByLabelText } = render(<Grid spaces={spaces} size={300} mark={mark} />);
  expect(baseElement).toBeDefined();
  const _s = getAllByLabelText(_);
  expect(_s.length).toBe(3);  
  const xs = getAllByLabelText(_);
  expect(xs.length).toBe(3);
  const os = getAllByLabelText(_);
  expect(os.length).toBe(3);
});
