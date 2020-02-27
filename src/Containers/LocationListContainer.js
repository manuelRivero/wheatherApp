import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import {connect} from 'react-redux';
import {setSelectedCity} from '../actions';
// components
import WeatherList from '../Components/Weather/WeatherList/WeatherList'

class ForecastListContainer extends Component{
  static propTypes = {
    dispatchsetCity: PropTypes.func.isRequired
  }

  
  cities = ["Lima,pe", "Chimbote,pe", "Trujillo,pe"]
  
  handleSelectionLocation = (city)=> {
    this.setState({
        city
    });
    this.props.dispatchsetCity(city);
};

  render() {
    return (
      <div>
        <WeatherList cities={this.cities} selectCity={  this.handleSelectionLocation}/>
      </div>
    )
  }
}

ForecastListContainer.propsType = {
    setCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch=>(
  {
    dispatchsetCity: city => dispatch(setSelectedCity(city))
  }
)
export default connect(null, mapDispatchToProps)(ForecastListContainer); 