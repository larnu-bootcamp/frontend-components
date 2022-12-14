import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';


test('contador 1 al renderizar por primera vez ', () => {
  render(<App />);
  const counter1 = screen.getByText (5);
  expect (counter1).toBeDefined(); 
});

test('contador 2 al renderizar por primera vez ', () => {
  render(<App />);
  const counter2 = screen.getByText ("10");
  expect (counter2).toBeDefined(); 
});

test('contador 3 al renderizar por primera vez ', () => {
  render(<App />);
  const counter3 = screen.getByText ("15");
  expect (counter3).toBeDefined(); 
});

test('contador 4 al renderizar por primera vez ', () => {
  render(<App />);
  const counter4 = screen.getByText ("20");
  expect (counter4).toBeDefined(); 
});

test('contador 5 al renderizar por primera vez ', () => {
  render(<App />);
  const counter5 = screen.getByText ("25");
  expect (counter5).toBeDefined(); 
});

test('contador 6 al renderizar por primera vez ', () => {
  render(<App />);
  const counter6 = screen.getByText ("30");
  expect (counter6).toBeDefined(); 
});

test('contador 7 al renderizar por primera vez ', () => {
  render(<App />);
  const counter7 = screen.getByText ("35");
  expect (counter7).toBeDefined(); 
});

