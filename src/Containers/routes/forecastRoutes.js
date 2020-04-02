import React from "react";
import { Route, Switch } from "react-router-dom";
import ForecastExtendedContainer from "../ForecastExtendedContainer";

// reconfigurar la ruta para que sea /weather/forecast/:city
// hacer que el parametro city sea dinamico dentro del map y cada ruta tenga el atributo exact
//mostrar un componente placeHolder para la ruta /weather/forecast/

function forecastRoutes({ cities }) {
  return (
    <Switch>
      <Route path="/forecast" exact>
        <h1>go to find some places to look</h1>
      </Route>
      <Route path={`/forecast/:city`}>
        <ForecastExtendedContainer />
      </Route>
      <Route path="*">
        Ups, not mach for that!
      </Route>
    </Switch>
  );
}

export default forecastRoutes;
