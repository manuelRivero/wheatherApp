import React, { Component } from "react";
// Router
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
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
import UserContainer from "./Containers/userContainer";

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexGrow: 1
    },
    container: {
      marginTop: "80px"
    }
  };
});

export default props => {
  const classes = useStyles();

  let routes = (
    <React.Fragment>
      
      <Route path="/weather">
        <LocationListContainer />
      </Route>
      <Route path='/weather/:city/forecast'>
        <ForecastExtendedContainer />
      </Route>
      <Route path='/user'>
        <Redirect from="/user" to="/weather"/>
      </Route>
      <Route path='/'>
        <Redirect from="/" to="/weather"/>
      </Route>
      
    </React.Fragment>
  );
  if (props.isAuth) {
    routes = (
      <React.Fragment>
        <Route path="/weather">
          <LocationListContainer />
        </Route>
        <Route path='/weather/:city/forecast'>
          <ForecastExtendedContainer />
        </Route>
        <Route path="/user" exact>
          <UserContainer />
        </Route>
      <Redirect from="/" to="/weather"/>
      </React.Fragment>
    );
  }

  return (
    <Router>
      <div className={classes.root}>
        <Header />
        <Container className={classes.container} maxWidth="md">
          <Grid container spacing={3}>
            {routes}
          </Grid>
        </Container>
      </div>
    </Router>
  );
};
