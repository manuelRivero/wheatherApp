import React, { Component } from "react";
import PropTypes from "prop-types";
// redux
import { connect } from "react-redux";
import { setSelectedCity, setUserLocation } from "../actions";
// components
import WeatherList from "../Components/Weather/WeatherList/WeatherList";

class ForecastListContainer extends Component {
  static propTypes = {
    dispatchsetCity: PropTypes.func.isRequired
  };

  handleSelectionLocation = city => {
    this.props.dispatchsetCity(city);
  };

  componentDidMount(){
    this.props.setUserLocation()
  }

  render() {
    return (
      <div>
        <WeatherList
          cities={this.props.cities}
          selectCity={this.handleSelectionLocation}
        />
      </div>
    );
  }
}

ForecastListContainer.propsType = {
  setCity: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  dispatchsetCity: city => dispatch(setSelectedCity(city)),
  setUserLocation: () => dispatch(setUserLocation())
});

const mapStateToProps = ({ cityReducer }) => ({
  cities: cityReducer.cities
});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastListContainer);
