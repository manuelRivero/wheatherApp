import React, {Component} from 'react'
// Components
import WeatherLocation from './Location';
import WeatherData from './WeatherData';
// Services
import {transformWeather, getData} from '../../services/TransformWeather.js';
//css
import './style.css';

export default class Weather extends Component{
  constructor({city}){
    super();    
    this.state ={
      city,
      data: null
    }
  }
  heandleError(err){
    console.log(err);
  };
  headleClick = (city) => {
        getData(city).then( weather =>{
          const data=transformWeather(weather);
        this.setState ({data});
      }).catch(err => {
        this.heandleError(err.message);
      } );
    
  };

  componentWillMount = () => {
    this.headleClick(this.state.city);
  }
  

  render = ()=> {
    const {onWeatherLocationClick} = this.props;
    const {city, data} = this.state;
  return (
    <div className="weatherLocationIndexCont" onClick={onWeatherLocationClick}>
      <WeatherLocation city={city} />
      {data ? <WeatherData data={data}/> : <p>cargando</p>}
    </div>
  )
}
}