import React from "react";
import PropTypes from "prop-types";
import ForescastItem from "../ForecastItem/ForecastItem";
import { CircularProgress, Grid, Paper } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( theme => {
  return ({
    paper:{
      padding:'1rem',
      textAlign: "center"
    }
  })
})

const ForecastExtended = ({ city,forecastExtendedData }) => {

  const classes=useStyles();
  let forecast = <CircularProgress />;

  if (forecastExtendedData && forecastExtendedData[0] === city ) {
    forecast = forecastExtendedData[1].map((day, index) => (
      <ForescastItem
        weekDay={day.weekDay}
        hour={day.hour}
        data={day.data}
        key={index}
      ></ForescastItem>
    ));
  }

  return (
    <Grid item sm={12} md={6}>
      <Paper className={classes.paper}>
        <h1>{city}</h1>
      {forecast}
      </Paper>
    </Grid>
  );
};

export default ForecastExtended;
