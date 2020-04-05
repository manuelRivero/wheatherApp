import React, { Component } from "react";
import PropTypes from "prop-types";
//router
import {withRouter} from "react-router"
// redux
import { connect } from "react-redux";
import * as actions from "../actions";
// components
import WeatherList from "../Components/Weather/WeatherList/WeatherList";
import SearchModal from "../Components/modal/modal";

class ForecastListContainer extends Component {
  
  handleSelectionLocation = city => {
    this.props.addCity(city);
    this.props.showSnackbar(`New location added, ${city}`)
  };

  componentDidMount() {
    if(this.props.cities.length < 1 ){
      this.props.setUserLocation();
    }
    let query= new URLSearchParams(this.props.location.search).get("find")
    if(query){
      this.props.onShowModal()
      this.props.searchCity(query)
    }
  }

  render() {
    let query= new URLSearchParams(this.props.location.search).get("find")
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
          addCity={this.handleSelectionLocation}
          hide={this.props.onHideModal}
          findValue={query ? query : null}
        />
      </React.Fragment>
    );
  }
}

ForecastListContainer.propsType = {
  setCity: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setUserLocation: () => dispatch(actions.setUserLocation()),
  searchCity: criterio => dispatch(actions.searchCity(criterio)),
  onShowModal: () => dispatch(actions.showModal()),
  onHideModal: () => dispatch(actions.hideModal()),
  addCity: city => dispatch(actions.addCity(city)),
  onDeleteCity: city => dispatch(actions.deleteCity(city)),
  showSnackbar: (message)=> dispatch(actions.showSnackbar(message))
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
)(withRouter(ForecastListContainer))
