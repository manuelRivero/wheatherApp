import React from 'react';
import PropTypes from  'prop-types';
import ForescastItem from '../ForecastItem/ForecastItem';


//css
import './style.css';


const renderForecastItem = (forecastData) => {
  return (forecastData.map( (day, index )=> (<ForescastItem weekDay={day.weekDay} hour={day.hour} data={day.data} key={index}></ForescastItem>)));
};
const renderCircularProgres = () => {
 return (<div className="circularProgresCont"><p>cargando</p></div>)
}

 const ForecastExtended =({city, forecastData}) => (
      <div className="forecastExtendedCont">
          <h1>{city}</h1>
          { forecastData ? renderForecastItem(forecastData) : renderCircularProgres()}
      </div>
    );
  ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
  }
  
  export default ForecastExtended;