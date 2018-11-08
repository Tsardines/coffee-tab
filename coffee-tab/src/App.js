import React, { Component } from 'react';

import Left from './Components/Left/Left.js';
import Right from './Components/Right/Right.js';

import { Text, Animated, View, Stylesheet, Platform } from 'react-native';

import './App.css';

class App extends Component {

  constructor() 
  {
    super()
    this.animatedValue = new this.animatedValue.Value(0);
  }

  animateBckgrColor = () => 
  {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 12000
      }
    ).start(() => { this.animateBckgrColor() });
  }

  componentDidMount()
  {
    this.animateBckgrColor();
  }


  render() {

    const bckgrColorVar = this.animatedValue.interpolate(
      {
        inputRange: [ 0, 0.5, 1 ],
        outputRange: [ 'magenta', 'red', 'yellow']
      });

    return (
      <div className="App">

      <Animated.View style = {[ styles.container, { bckgrColor: bckgrColorVar } ]}> 
        <Text style = { styles.text }>Animated></Text>
      </Animated.View>

        <Left />
        <Right />

      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bckgrColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  },
});

export default App;
