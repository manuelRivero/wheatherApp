import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from '../Components/Weather/ForecastExtended/ForecastExtended';

class ForecastExtendedContainer extends Component {
  static propTypes = {
    city:PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        { this.props.city ? 
      <ForecastExtended city={this.props.city}/>
      : <h1>no se selecciono ninguna ciudad</h1>}
      </div>
    )
  }
}
const mapsStateToProps = ({city, cities}) =>( { city, f:cities[city] && cities } );
export default connect(mapsStateToProps, null)(ForecastExtendedContainer)