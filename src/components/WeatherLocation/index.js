import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import transformWeather from './../../services/transformWeather';
import { SNOW, RAIN , SUN } from './../../constants/weathers';

const location = "Bogota";
const apiKey = "da09c8c53b94eb4fbea563ad654b035b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ apiKey }`;

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 35,
  wind: '10 m/s'
};

class WeatherLocation extends Component{

  constructor(){
    super();
    this.state = {
      city: 'Buenos Aires',
      data: data,
    }
  }

  handleUpdateClick = () => {
    fetch(api_weather).then(data => {
      return data.json();
    }).then( weather_data => {
      var data = transformWeather(weather_data);
      console.log({ data });
      this.setState({ data });
      console.log(weather_data);
    }).catch();
  }

  render = ()  => {
    const { city, data } = this.state;
    return(
      <div className='weatherLocationCont'>
        <Location city={ city } className='weatherLocation' />
        <WeatherData data={ data } />
        <button onClick={this.handleUpdateClick} > Actualizar </button>
      </div>);  
  };
};

export default WeatherLocation;