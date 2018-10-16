import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Main from './containers/Main';


import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavBar />
          <Main />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
