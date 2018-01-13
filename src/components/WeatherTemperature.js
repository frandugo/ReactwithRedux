import React from 'react';
import WeatherIcons from 'react-weathericons';
const getWeatherIcon = weatherstate => {
  switch (weatherstate){
    case "cloud":
        return( <WeatherIcons name="cloud" size="2x" /> );
      break;
    default:
        return( <WeatherIcons name="sleet" size="2x" /> );
      break;  
  }
}
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    
    <span>{`${temperature} C`}</span>
  </div>
);

export default WeatherTemperature;

// https://vuejsdevelopers.com/2018/01/08/vue-js-roles-permissions-casl/?jsdojo_id=revue_vrp&utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20Developers