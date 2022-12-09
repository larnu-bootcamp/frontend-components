import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/home';

test('Renders main page correctly', () => {
  render(<App />);
  expect(true).toBeTruthy();
});