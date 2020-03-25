import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import WeatherData from '../WeatherData';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStiles= makeStyles( theme => {
  return ({root:{
    margin:"1rem"
  }})
})

export default ({weekDay, hour, data })=> {
  const classes = useStiles();

    return (
      <React.Fragment>
          <Card className={classes.root}>
            <CardHeader title={weekDay} subheader={`${hour}:00`} />
            <CardContent>
              <WeatherData data={data}></WeatherData>
            </CardContent>
            
          </Card>
      </React.Fragment> 
    )
  
}
