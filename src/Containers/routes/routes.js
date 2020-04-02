import React from "react";
import { Route, Redirect} from "react-router-dom";

import ForecastRoutes from "./forecastRoutes";
import LocationListContainer from "./../LocationListContainer"
import UserRoutes from "./userRoutes";

export default function Routes(props) {
  let routes = (
    <React.Fragment>
      <Route path="/weather">
        <LocationListContainer />
      </Route>

      {/* Dinamic Routes for Forecast Extended */}
      <ForecastRoutes />

      {/* Dinamic Routes for User*/}
      <UserRoutes />

      <Route path="/" >
        <Redirect from="/" to="/weather" />
      </Route>
    </React.Fragment>
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

  return (routes);
}
