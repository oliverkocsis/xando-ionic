import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Space from './Space';
import { _, X, O } from './Players';

test('renders without crashing', () => {
  const mark = jest.fn();
  const { baseElement } = render(<Space index={0} value={_} mark={mark}/>);
  expect(baseElement).toBeDefined();
});

test('empty space can be marked ', () => {
  const mark = jest.fn();
  const { baseElement, getByText } = render(<Space index={0} value={_} mark={mark}/>);
  fireEvent.click(getByText(_));
  expect(mark).toHaveBeenCalled();
});

test('marked space (x) can not be marked ', () => {
  const mark = jest.fn();
  const { baseElement, getByText  } = render(<Space index={0} value={X} mark={mark}/>);
  fireEvent.click(getByText(X));
  expect(mark).not.toHaveBeenCalled();
});

test('marked space (o) can not be marked ', () => {
  const mark = jest.fn();
  const { baseElement, getByText  } = render(<Space index={0} value={O} mark={mark}/>);
  fireEvent.click(getByText(O));
  expect(mark).not.toHaveBeenCalled();
});