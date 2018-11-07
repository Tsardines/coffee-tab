import React, { Component } from 'react';

import Left from './Components/Left/Left.js';
import Right from './Components/Right/Right.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Left />
        <Right />

      </div>
    );
  }
}

export default App;
