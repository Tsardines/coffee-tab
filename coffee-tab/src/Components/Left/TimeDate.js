import React, { Component } from 'react';
import './Left.css';

import Clock from 'react-live-clock';

class TimeDate extends Component {
  render() {
    return (
      <div className="time-date">

      <h1>TimeDate Box</h1>

        <div className="time">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        </div>

        <div className="date">
          <Clock format={'dddd, MMMM Mo, YYYY'} />
        </div>

      </div>

    );
  }
}

export default TimeDate;
