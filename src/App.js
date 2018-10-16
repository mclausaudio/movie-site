import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';

import Main from './containers/Main';
import NavBar from './components/NavBar';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <NavBar />
              <Main />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
