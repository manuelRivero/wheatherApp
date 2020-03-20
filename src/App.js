import React, { Component } from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

// Components
import Header from "./Components/Header/Header";
import LocationListContainer from "./Containers/LocationListContainer";
import ForecastExtendedContainer from "./Containers/ForecastExtendedContainer";
import "./App.css";

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: "1rem",
      textAlign: "center"
    },
    container:{
      marginTop:'80px'
    }
  };
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <LocationListContainer />
            </Paper>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ForecastExtendedContainer />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};


