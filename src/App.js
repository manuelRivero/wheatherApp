import React, { Component } from "react";
// Router 
import { Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
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
    <Router>
    <div className={classes.root}>
      <Header />
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={3}>
              
              <Route path="/weather" >
                <LocationListContainer/>
              </Route>
              <Route path="/user" exact >
                <UserContainer />
              </Route>
              
        </Grid>
      </Container>
    </div>
    </Router>
  );
};


