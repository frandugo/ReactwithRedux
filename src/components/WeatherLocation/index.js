import React, { Component, PropTypes } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import transformWeather from './../../services/transformWeather';
import { SNOW, RAIN , SUN } from './../../constants/weathers';

const url = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "da09c8c53b94eb4fbea563ad654b035b";


const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 70,
  wind: '10 m/s'
};

class WeatherLocation extends Component{

  constructor({ city }){
    console.log('Constructor');
    super();
    this.state = {
      city,
      data: null,
    }
  }


  componentWillMount(){
    const city = this.state;
    const api_weather = `${ url }?q=${ city }&appid=${ apiKey }`;
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
        <Location city={ city } />
        <WeatherData data={ data } />
      </div>);  
  };
};
WeatherLocation.propTypes = {
  city: PropTypes.string,
}
export default WeatherLocation;