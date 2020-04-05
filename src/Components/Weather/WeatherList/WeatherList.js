import React, { Component } from "react";
import WeatherItem from "../weatherItem/weatherItem.tsx";
import WeatherAlert from "../weatherAlert/weatherAlert.tsx";
import WeatherListController from "../weatherListController/weatherListController";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => {
  return {
    paper: {
      padding: "1rem",
      textAlign: "center"
    }
  };
};
class WeatherList extends Component {
  state = {
    showModal: false,
    deleteItem: null
  };
  modalSubmit = () => {
    this.setState({ showModal: false });
    this.props.deleteCity(this.state.deleteItem);
  };

  modalCancel = () => {
    console.log("cancelado");
    this.setState({ showModal: false, deleteItem: false });
  };

  setDeleteItem = index => {
    this.setState({ deleteItem: index, showModal: true });
  };

  render() {
    const { cities, classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            {cities.map((city, index) => (
              <WeatherItem
                key={city + index}
                city={city}
                onDelete={index > 0 ? () => this.setDeleteItem(index) : null}
              />
            ))}
            <WeatherListController showModal={this.props.showModal} />
          </Paper>
        </Grid>

        <WeatherAlert
          show={this.state.showModal}
          onSubmit={this.modalSubmit}
          onCancel={this.modalCancel}
          city={cities[this.state.deleteItem]}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WeatherList);
