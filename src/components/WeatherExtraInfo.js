import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <strong class="humidity">{ `${ humidity } % Humidity`  }</strong><br/>
    <strong class="wind">{ `${ wind } Wind` }</strong>
  </div>
);

export default WeatherExtraInfo;