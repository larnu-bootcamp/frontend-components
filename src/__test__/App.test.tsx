import App from "../App"
import { render, screen } from '@testing-library/react'
import React from "react";


describe('test generales a la app', () => {
  test('like 1 al renderizar por primera vez ', () => {
    render(<App />);
    const counter1 = screen.getByText ("5");
    expect (counter1).toBe('5'); 
  });
    
  })
