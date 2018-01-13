import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
const WeatherData = () => (
  <div>
    <WeatherTemperature temperature={35}/>
    <WeatherExtraInfo humidity={ 80 } wind={ '10 m/s' } />
    Weather Data
  </div>
);

export default WeatherData;