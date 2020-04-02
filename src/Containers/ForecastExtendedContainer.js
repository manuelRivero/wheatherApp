import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter, Route} from 'react-router-dom'
import { connect } from "react-redux";
import ForecastExtended from "../Components/Weather/ForecastExtended/ForecastExtended";
import * as actions from "../actions/index";

class ForecastExtendedContainer extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired
  };

  componentDidMount(){
    let city = this.props.match.params.city;
    this.props.getForecast(city)

  }
  componentDidUpdate(){
    
    if( this.props.availableCities[this.props.match.params.city]){
      console.log("ciudad no disponible")
      return;
    }
    if(this.props.forecastExtendedData[0] !== this.props.match.params.city){
      console.log("deberia actualizar")
    let city = this.props.match.params.city;
    this.props.getForecast(city)
    }
    
  }

  render() {
    let city = this.props.match.params.city;
    return ( 
              <ForecastExtended city={city} forecastExtendedData={this.props.forecastExtendedData}/>
    );
  }
}
const mapsStateToProps = ({extendedForecastReducer,cityReducer }) => {
  return { 
    forecastExtendedData: extendedForecastReducer,
    availableCities: cityReducer.cities
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getForecast :(city) => dispatch(actions.getForecastData(city))
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(withRouter(ForecastExtendedContainer));
