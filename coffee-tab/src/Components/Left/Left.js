import React, { Component } from 'react';

import Welcome from './Welcome.js';
import TimeDate from './TimeDate.js';

import './Left.css';

class Left extends Component {
  render() {
    return (
      <div className="left">

      <Welcome />
      <TimeDate />

      </div>
    );
  }
}

export default Left;
