import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD, CLOUDY , RAIN, SNOW, SUN } from './../constants/weathers';
const WeatherData = () => (
  <div>
    <WeatherTemperature temperature={35} weatherState={CLOUD} />
    <WeatherExtraInfo humidity={ 80 } wind={ '10 m/s' } />
    Weather Data
  </div>
);

export default WeatherData;