import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Space from './Space';
import { _, X, O } from './Players';

test('find all by aria-label', () => {
  const myLabel = "my-label";
  const { baseElement, getAllByLabelText } = render(<div><div aria-label={myLabel}>lorem ipsum</div><div aria-label={myLabel}>dolor sit amet</div></div>);
  const elements = getAllByLabelText(myLabel);
  expect(elements.length).toBe(2);
});

test('find by aria-label', () => {
  const myLabel = "my-label";
  const onClickMock = jest.fn();
  const { baseElement, getByLabelText } = render(<div aria-label={myLabel} onClick={onClickMock}>lorem ipsum</div>);
  fireEvent.click(getByLabelText(myLabel));
  expect(onClickMock).toHaveBeenCalled();
});

test('find by data-testid', () => {
  const myLabel = "my-testid";
  const onClickMock = jest.fn();
  const { baseElement, getByTestId } = render(<div data-testid={myLabel} onClick={onClickMock}>lorem ipsum</div>);
  fireEvent.click(getByTestId(myLabel));
  expect(onClickMock).toHaveBeenCalled();
});

test('renders without crashing', () => {
  const mark = jest.fn();
  const { baseElement } = render(<Space index={0} value={_} size={50} mark={mark} />);
  expect(baseElement).toBeDefined();
});

test('empty space can be marked ', () => {
  const mark = jest.fn();
  const { baseElement, getByLabelText } = render(<Space index={0} value={_} size={50} mark={mark} />);
  fireEvent.click(getByLabelText(_));
  expect(mark).toHaveBeenCalled();
});

test('marked space (x) can not be marked ', () => {
  const mark = jest.fn();
  const { baseElement, getByLabelText } = render(<Space index={0} value={X} size={50} mark={mark} />);
  fireEvent.click(getByLabelText(X));
  expect(mark).not.toHaveBeenCalled();
});

test('marked space (o) can not be marked ', () => {
  const mark = jest.fn();
  const { baseElement, getByLabelText } = render(<Space index={0} value={O} size={50} mark={mark} />);
  fireEvent.click(getByLabelText(O));
  expect(mark).not.toHaveBeenCalled();
});