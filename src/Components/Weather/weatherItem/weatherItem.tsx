import React, { Component } from "react";
import Data from "../WeatherData";
//Router
import { withRouter, RouteComponentProps } from "react-router-dom";
// Services
import {
  transformWeather,
  getData,
} from "../../../services/TransformWeather.js";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Card,
  CardContent,
  Tooltip,
  CardHeader,
  IconButton,
} from "@material-ui/core";

interface props extends RouteComponentProps {
  city: string;
  onDelete: () => void | null;
}

type state = {
  data: any;
};

class Weather extends Component<props, state> {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  headleClick = () => {
    let path = `/forecast/${this.props.city}`;
    console.log(this.props.history.replace(path));
  };

  onDelete = (e) => {
    e.stopPropagation();
    this.props.onDelete();
  };

  componentWillMount = () => {
    getData(this.props.city).then((res) => {
      const weather = transformWeather(res);
      this.setState({ data: weather });
    });
  };

  render = () => {
    const { city } = this.props;
    const { data } = this.state;
    return (
      <Card
        style={{ margin: "1.5rem auto", cursor: "pointer", maxWidth:" 600px" }}
        onClick={this.headleClick}
      >
        <CardHeader
          title={city}
          action={
            this.props.onDelete && (
              <Tooltip title="Delete this location">
                <IconButton aria-label="settings" onClick={this.onDelete}>
                  <CancelIcon color="secondary" />
                </IconButton>
              </Tooltip>
            )
          }
        />
        <CardContent>
          {data ? <Data data={data} /> : <p>cargando</p>}
        </CardContent>
      </Card>
    );
  };
}

export default withRouter(Weather);
