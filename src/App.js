import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation'
import WeatherData from './components/WeatherData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherData/>
        <WeatherLocation/>
      </div>
    );
  }
}

export default App;
