import React, { Component } from "react";
import PropTypes from "prop-types";
//router
// redux
import { connect } from "react-redux";
import {
  setSelectedCity,
  setUserLocation,
  searchCity,
  showModal,
  hideModal,
  addCity,
  deleteCity
} from "../actions";
// components
import WeatherList from "../Components/Weather/WeatherList/WeatherList";
import SearchModal from "../Components/modal/modal";

class ForecastListContainer extends Component {
  static propTypes = {
    dispatchsetCity: PropTypes.func.isRequired
  };

  handleSelectionLocation = city => {
    this.props.dispatchsetCity(city);
  };

  componentDidMount() {
    if(this.props.cities.length < 1 ){
      this.props.setUserLocation();
    }
  }

  render() {
    return (
      <React.Fragment>
        <WeatherList
          cities={this.props.cities}
          showModal={this.props.onShowModal}
          deleteCity={this.props.onDeleteCity}
        />
        <SearchModal
          open={this.props.showModal}
          searchCity={this.props.searchCity}
          isLoading={this.props.isLoading}
          searchResults={this.props.searchResults}
          addCity={this.props.addCity}
        />
      </React.Fragment>
    );
  }
}

ForecastListContainer.propsType = {
  setCity: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setUserLocation: () => dispatch(setUserLocation()),
  searchCity: criterio => dispatch(searchCity(criterio)),
  onShowModal: () => dispatch(showModal()),
  onHideModal: () => dispatch(hideModal()),
  addCity: city => dispatch(addCity(city)),
  onDeleteCity: city => dispatch(deleteCity(city))
});

const mapStateToProps = ({ cityReducer }) => ({
  cities: cityReducer.cities,
  isLoading: cityReducer.isLoading,
  searchResults: cityReducer.searchResults,
  showModal: cityReducer.showModal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastListContainer);
