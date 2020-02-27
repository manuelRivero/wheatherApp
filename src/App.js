import React, { Component } from 'react';
// material
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

// Components 
import Header from './Components/Header/Header'
import LocationListContainer from './Containers/LocationListContainer';
import ForecastExtendedContainer from './Containers/ForecastExtendedContainer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      
      <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper >xs=6</Paper>
              <Paper >xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >xs=6</Paper>
            </Grid>
        </Grid>
      </Container>

    );
  }
}


/*

         <Grid container spacing={2}>
              <Grid item xs={12}>
                Header
              </Grid>
              <Grid item xs={12}>
                  <LocationListContainer />
              </Grid>
              <Grid item xs={12}>
                <ForecastExtendedContainer />
              </Grid>
          </Grid>
*/