import React, { Component } from 'react';

import Welcome from './Welcome.js';
import TimeDate from './TimeDate.js';

import './Left.css';

class Left extends Component {
  render() {
    return (
      <div className="left">

      <h1>Left Box</h1>

      <Welcome />
      <TimeDate />

      </div>
    );
  }
}

export default Left;
