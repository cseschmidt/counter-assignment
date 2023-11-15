import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter'; // Adjust the import path as necessary

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrButton = screen.getByText('+');
  fireEvent.click(incrButton);
  fireEvent.click(incrButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  // Increment first to avoid negative count
  const incrButton = screen.getByText('+');
  fireEvent.click(incrButton);
  fireEvent.click(incrButton);

  const decrButton = screen.getByText('-');
  fireEvent.click(decrButton);
  fireEvent.click(decrButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});
