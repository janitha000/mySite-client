import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header/Header'

function App() {
  return (
    <div >
      <Router>
        <Header />
      </Router>

    </div>
  );
}


export default App;
