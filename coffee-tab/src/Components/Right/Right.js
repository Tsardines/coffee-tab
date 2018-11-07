import React, { Component } from 'react';

import Cal from './Cal.js';
import Weather from './Weather.js';

import './Right.css';

class Right extends Component {
  render() {
    return (
      <div className="right">

      <h1>Right Box</h1>

      <Cal />
      <Weather />

      </div>
    );
  }
}

export default Right;
