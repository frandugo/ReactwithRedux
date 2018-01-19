import React from 'react';
import PropTypes from 'prop-types';


const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <strong class="humidity">{ `${ humidity } % Humidity`  }</strong><br/>
    <strong class="wind">{ `${ wind } Wind` }</strong>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;