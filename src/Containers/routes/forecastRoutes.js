import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ForecastExtendedContainer from "../ForecastExtendedContainer";

// reconfigurar la ruta para que sea /weather/forecast/:city 
// hacer que el parametro city sea dinamico dentro del mal y cada ruta tenga el atributo exact
//mostrar un componente placeHolder para la ruta /weather/forecast/

function forecastRoutes({ cities }) {
  return (
    <Switch>
      {cities.map((city,index) => {
        return (<React.Fragment>
            <Route key={city+index} path={`/weather/:city/forecast`} >
              <ForecastExtendedContainer />
            </Route>
            <Route path="*">
              
                {null}
              
            </Route></React.Fragment>
        );
      })}
    </Switch>
  );
}

const mapStateToProps = ({ cityReducer }) => {
  return {
    cities: cityReducer.cities
  };
};

export default connect(mapStateToProps, null)(forecastRoutes);
