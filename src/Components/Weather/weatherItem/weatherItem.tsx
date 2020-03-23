import React, { Component } from "react";
import Data from "../WeatherData";
// Services
import {
  transformWeather,
  getData
} from "../../../services/TransformWeather.js";
import CancelIcon from '@material-ui/icons/Cancel';
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  headleClick = city => {
    this.props.click(city);
  };

  onDelete = e => {
    e.stopPropagation()
    this.props.onDelete()
  }

  componentWillMount = () => {
    getData(this.props.city).then(res => {
      const weather = transformWeather(res);
      this.setState({ data: weather });
    });
  };

  render = () => {
    const { city } = this.props;
    const { data } = this.state;
    return (
      <div className="weatherItem" onClick={this.headleClick}>
        <Card style={{ marginBottom: "1.5rem" }}>
          <CardHeader
            title={city}
            action={
              <IconButton aria-label="settings" onClick={this.onDelete}>
                <CancelIcon color="secondary" />
              </IconButton>
            }
          />
          <CardContent>
            {data ? <Data data={data} /> : <p>cargando</p>}
          </CardContent>
        </Card>
      </div>
    );
  };
}
