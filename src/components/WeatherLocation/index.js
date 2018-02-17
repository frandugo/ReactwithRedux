import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SNOW, RAIN , SUN } from './../../constants/weathers';

const location = "Bogota";
const apiKey = "da09c8c53b94eb4fbea563ad654b035b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ apiKey }`;

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 70,
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

  getWeatherState = weather => {
    return SUN;
  }

  getData = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${ speed } m/s`,
    }

  }

  handleUpdateClick = () => {
    fetch(api_weather).then(data => {
      return data.json();
    }).then( weather_data => {
      const data = this.getData(weather_data);
      this.setState({ data });
      console.log(weather_data);
      //debugger;
    }).catch();
  }

  render = ()  => {
    const { city, data } = this.state;
    return(
      <div className='weatherLocationCont'>
        <Location city={ city } />
        <WeatherData data={ data } />
      </div>);  
  };
};

export default WeatherLocation;