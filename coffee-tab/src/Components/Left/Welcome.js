import React, { Component } from 'react';
import './Left.css';



class Welcome extends Component {

  render() {
    let messageArr = [
      "People who live in glass houses hafta answer tha door.",
      "Before you point fingers at others, make sure you have no dirt under your own nails.",
      "Alrite, tha.",
      "I couldn't fix your brakes so I made your horn louder.",
      "I was gonna tell a time traveling joke but you guys didn't like it.",
      "My favorite things are eating my family and not using commas.",
      "Shout out to the people wondering what the opposite of in is.",
      "People are often shocked when they find out I'm not a good electrician."
    ];

    let randomItem = messageArr[Math.floor(Math.random()*messageArr.length)];

    return (
      <div className="welcome">

      <h1>"{randomItem}"</h1>

      </div>

    );
  }
}

export default Welcome;
