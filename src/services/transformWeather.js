import convert from 'convert-units';
import { SNOW, RAIN , SUN } from './../constants/weathers';

const getTemp = kelvin => {
  return convert(kelvin).from('K').to('C');
}
const getWeatherState = weather => {
  return SUN;
}
const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(this.weather);
  const temperature = getTemp(temp);
  const data = {
    temperature,
    weatherState,
    humidity,
    wind: `${ speed } m/s`,
  }
  return data;
}


export default transformWeather;