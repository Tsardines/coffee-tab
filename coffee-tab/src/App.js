import React, { Component } from 'react';

import Left from './Components/Left/Left.js';
import Right from './Components/Right/Right.js';

// import { Animated } from 

import './App.css';

class App extends Component {

  // constructor() 
  // {
  //   super()
  //   this.animatedValue = new this.animatedValue.Value(0);
  // }

  // animateBckgrColor = () => 
  // {
  //   this.animatedValue.setValue(0);
  //   Animated.timing(
  //     this.animatedValue,
  //     {
  //       toValue: 1,
  //       duration: 12000
  //     }
  //   ).start(() => { this.animateBckgrColor() });
  // }

  // componentDidMount()
  // {
  //   this.animateBckgrColor();
  // }


  render() {



    // const bckgrColorVar = this.animatedValue.interpolate (
    //   {
    //     inputRange: [ 0, 0.5, 1 ],
    //     outputRange: [ 'magenta', 'red', 'yellow']
    //   });

    return (

      <div className="App">

        {/* <div className="view-style">
          <Animated.View style = { bckgrColor: bckgrColorVar } />
        </div> */}

        <Left />
        <Right />

      </div>
    );
  }
}

export default App;
