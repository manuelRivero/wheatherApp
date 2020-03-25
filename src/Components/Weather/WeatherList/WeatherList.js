import React, { Component } from "react";
import WeatherItem from "../weatherItem/weatherItem.tsx";
import WeatherAlert from "../weatherAlert/weatherAlert.tsx"
import WeatherListController from "../weatherListController/weatherListController";

export default class WeatherList extends Component {
  
  state={
    showModal:false,
    deleteItem:null
  }
  modalSubmit=()=>{
    this.setState({showModal:false})
    this.props.deleteCity(this.state.deleteItem)
  }

  modalCancel=()=>{
    console.log("cancelado")
    this.setState({showModal:false, deleteItem:false})
  }

  setDeleteItem=(index)=>{
    this.setState({deleteItem:index, showModal:true})
  }
  

  render() {
    const { cities } = this.props;
    return (
      <React.Fragment>
        
      <div className="weatherList">
        {cities.map((city, index) => (
          <WeatherItem
            key={city + index}
            city={city}
            click={() => this.props.selectCity(city)}
            onDelete={()=> this.setDeleteItem(index)}
          />
        ))}
        <WeatherListController showModal ={this.props.showModal} />
      </div>
      <WeatherAlert show={this.state.showModal} onSubmit={this.modalSubmit} onCancel={this.modalCancel} city={this.state.deleteItem} />
      </React.Fragment>
    );
  }
}
