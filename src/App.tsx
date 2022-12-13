import Home from './components/home';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  )

}

export default App;