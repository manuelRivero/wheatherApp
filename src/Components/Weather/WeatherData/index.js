import React from 'react'
// components
import WeatherTemperature from './Temperature';
import WeatherExtraInfo from './ExtraInfo';
import './style.css';




export  default ({data}) => {
  
  const {temperature, weatherState, humidity, wind } = data; 
 
  
  return (
    <div className="indexCont">
      <WeatherTemperature className="temperatureCont" temperature={temperature} weatherState={weatherState}/>
      <WeatherExtraInfo className="extraInfoCont" humidity={humidity} wind={wind} />
    </div>
  )
  
}


