import React from 'react'
// components
import WeatherTemperature from './Temperature';
import WeatherExtraInfo from './ExtraInfo';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( theme =>{
  return {
    
      root:{
        display:'flex',
        backgroundColor: "rgba(240, 240, 240, .5)",
        boxSizing:"border-box"
      }
    
  }
})




export  default ({data}) => {

  const classes = useStyles()
  
  const {temperature, weatherState, humidity, wind } = data; 
 
  
  return (
    <div className={classes.root}>
      <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
      <WeatherExtraInfo  humidity={humidity} wind={wind} />
    </div>
  )
  
}


