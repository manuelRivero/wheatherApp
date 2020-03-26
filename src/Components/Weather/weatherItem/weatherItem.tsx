import React, { Component } from "react";
import Data from "../WeatherData";
//Router
import {withRouter ,RouteComponentProps} from 'react-router-dom'
// Services
import {
  transformWeather,
  getData
} from "../../../services/TransformWeather.js";
import CancelIcon from '@material-ui/icons/Cancel';
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";

interface props extends RouteComponentProps{
  city:string,
  onDelete: ()=>void
}

type state= {
  data:any
}

class Weather extends Component<props, state> {
  constructor(props) {
    super(props);
    this.state = {
    data: null
  };
  }
  

  headleClick =  () => {

    let path = `/weather/${this.props.city}/forecast`;
    console.log(this.props.history.replace(path))
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
        <Card style={{ marginBottom: "1.5rem" }} onClick={this.headleClick}>
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
    );
  };
}

export default withRouter(Weather )
