import React, { Component } from "react";
// Router
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Containers/routes/routes";
// material
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Components
import Header from "./Components/Header/Header";
import "./App.css";
import SnackbarContainer from "./Containers/snackbarContainer";
import FooterContainer from "./Containers/footerContainer";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: "80px",
    },
  };
});

export default (props) => {
  const classes = useStyles();
  return (
    <Router basename="/wheatherApp">
      <div className={classes.root}>
        <Header />
        <Container className={classes.container} maxWidth="md">
          <Grid container direction="row" justify="center" alignItems="center">
            <Routes />
            <SnackbarContainer />
          </Grid>
        </Container>
        <FooterContainer />
      </div>
    </Router>
  );
};
