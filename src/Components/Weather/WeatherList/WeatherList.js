import React, { Component } from "react";
import WeatherItem from "../weatherItem/weatherItem";
import WeatherListController from "../weatherListController/weatherListController";

export default class WeatherList extends Component {
  

  render() {
    const { cities } = this.props;
    return (
      <div className="weatherList">
        {cities.map(city => (
          <WeatherItem
            key={city}
            city={city}
            click={() => this.props.selectCity(city)}
          />
        ))}
        <WeatherListController showModal ={this.props.showModal} />
      </div>
    );
  }
}
