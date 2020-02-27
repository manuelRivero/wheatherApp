import React from 'react';
import  '../../../fontawesome-free-5.6.3-web/css/all.css'
//  fa-rainbow  fa-cloud-moon fa-cloud-moon-rain cloud-sun-rain fa-cloud-sun
import './style.css';

const getWeatherIcon= ({icon}) => {
    return (`http://openweathermap.org/img/w/${icon}.png`);
};


export default ({temperature, weatherState}) => {
  return (
    <div className="temperatureCont">
      <h3> <img  src={getWeatherIcon(weatherState)}alt="" className="icon-img" />  {`  ${temperature}`}<span className="tempDegrees">Cº</span></h3>
    </div>
  )
}
