import React, { Component } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import './Right.css';

class Cal extends Component {


  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
    }
  }



  render(): ReactNode {
    return (
      <div className="cal">

      <button onClick={(e) => this.handleItemClick(e, 'sign-in')} >
        sign-in
      </button>

      <button onClick={(e) => this.handleItemClick(e, 'sign-out')} ></button>
        sign-out
      </div>
    );
  }
}

export default Cal;
