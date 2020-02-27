import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import WeatherData from '../WeatherData';
// css
import './style.css';


export default class ForescastItem extends Component {
  static propTypes = {
      weekDay:PropTypes.string.isRequired,
      hour:PropTypes.number.isRequired,
      data:PropTypes.shape({
        
      }),
  }

  render() {
      const {weekDay, hour, data }=this.props;
    return (
      <div className="forecastItemCont">
          <h2>{weekDay} {hour}</h2>
          <WeatherData data={data}></WeatherData>
      </div>
    )
  }
}
