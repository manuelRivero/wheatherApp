import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ForecastRoutes from "./forecastRoutes";
import LocationListContainer from "./../LocationListContainer";
import UserRoutes from "./userRoutes";

const WeatherRoutes = () => {
  return (
    <React.Fragment>
      <Route path="/weather" exact>
        <LocationListContainer />
      </Route>
    </React.Fragment>
  );
};

const NotFound = () => {
  return <h1>not found</h1>;
};

export default function Routes(props) {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/weather" />
      </Route>
      <Route path="/weather">
        <WeatherRoutes />
      </Route>

      <Route path="/forecast">
        <ForecastRoutes />
      </Route>

      <Route path="/user">
        <UserRoutes />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
  if (props.isAuth) {
    routes = (
      <React.Fragment>
        <Route path="/weather">
          <LocationListContainer />
        </Route>

        {/* Dinamic Routes for Forecast Extended */}
        <ForecastRoutes />

        {/* Dinamic Routes for User*/}
        <UserRoutes />

        <Redirect from="/" to="/weather" />
        <Route path="*">
          <h1>404</h1>
        </Route>
      </React.Fragment>
    );
  }

  return routes;
}
