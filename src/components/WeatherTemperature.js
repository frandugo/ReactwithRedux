import React from 'react';
import WeatherIcons from 'react-weathericons';

const stateToIconName = weatherState => {
  switch (weatherState){
    case "cloud":
        return "cloud";
    case "cloudy":
        return "cloudy";
    case "sun":
        return "day-sunny";
    case "rain":
        return "rain";            
    default:
        return "day-sunny";
      break;  
  }
};
const getWeatherIcon = weatherState => {
  return(<WeatherIcons name={stateToIconName(weatherState)} size="2x" />);
}
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    
    <span>{`${temperature} C`}</span>
  </div>
);

export default WeatherTemperature;

// https://vuejsdevelopers.com/2018/01/08/vue-js-roles-permissions-casl/?jsdojo_id=revue_vrp&utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20Developers
// https://scrimba.com/p/pWqLHa/cg9PpTb