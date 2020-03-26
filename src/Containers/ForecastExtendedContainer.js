import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ForecastExtended from "../Components/Weather/ForecastExtended/ForecastExtended";

class ForecastExtendedContainer extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired
  };

  render() {
    return (
      <React.Fragment>
        {this.props.city ? (
          <ForecastExtended city={this.props.city} forecastExtendedData={this.props.forecastExtendedData}/>
        ) : (
          <h1>no se selecciono ninguna ciudad</h1>
        )}
      </React.Fragment>
    );
  }
}
const mapsStateToProps = ({ cityReducer, extendedForecastReducer }) => {
  return { 
    city: cityReducer.selectedCity,
    forecastExtendedData: extendedForecastReducer
  };
};
export default connect(mapsStateToProps, null)(ForecastExtendedContainer);
