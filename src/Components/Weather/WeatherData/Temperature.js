import React from 'react';
//  fa-rainbow  fa-cloud-moon fa-cloud-moon-rain cloud-sun-rain fa-cloud-sun
import {makeStyles} from '@material-ui/core/styles'

const getWeatherIcon= ({icon}) => {
    return (`http://openweathermap.org/img/w/${icon}.png`);
};

const useStyles = makeStyles( theme => {
  return ({
    temperature:{
      flexGrow:"2",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}
  )
})
export default ({temperature, weatherState}) => {
  const classes = useStyles()
  return (
    <div className={classes.temperature}>
      <img  src={getWeatherIcon(weatherState)}alt="" className="icon-img" />
      <h3>{`  ${temperature}`}<span className="tempDegrees">Cº</span></h3>
    </div>
  )
}
