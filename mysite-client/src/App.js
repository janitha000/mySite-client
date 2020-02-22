import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import SignUp from './Auth/Signup'

function App() {
  return (
    <div >
      <Router>
        
        <Header />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/signup' component={SignUp} />
      </Router>

    </div>
  );
}


export default App;
