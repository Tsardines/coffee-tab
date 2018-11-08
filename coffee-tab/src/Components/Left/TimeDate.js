import React, { Component } from 'react';
import './Left.css';

import Clock from 'react-live-clock';

class TimeDate extends Component {

  constructor() {
    super()
    this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }

  componentWillMount()
  {
    setInterval(() => this.currentTime(),1000)
  }


  render() {
    return (
      <div className="time-date">

        <h1>TimeDate Box</h1>

      <div className="time">

        <h1>
          {this.state.time.toLocaleTimeString()}
        </h1>

      </div>

        <div className="date">
          <Clock format={'dddd, MMMM Mo, YYYY'} />
        </div>

      </div>
      
    );
  }
}

export default TimeDate;
