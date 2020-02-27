import React, { Component } from 'react';
//components
import Weather from '../index.js';
//css
import './style.css';
export default class WeatherList extends Component {
  
   handleWeatherLocationClick = city =>{
     this.props.selectCity(city);
   }
  
  render() {
    
    const forComponent = (cities) => {
     return cities.map( city =>(
     <Weather key={city} city={city} onWeatherLocationClick={ () => this.handleWeatherLocationClick(city) }/>
     ));
  };
    const {cities}=this.props;
    return (
      <div className="locationList">{forComponent(cities)}></div>
      
    )
  }
}
