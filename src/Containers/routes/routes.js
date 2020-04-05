import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {connect} from "react-redux";
import ForecastRoutes from "./forecastRoutes";
import LocationListContainer from "./../LocationListContainer";

import * as actions from "../../actions/index"

//auth
import firebaseApp from "./../../firebase/firebaseConfi";
import UserContainer from "../userContainer";

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
function Routes({setAuthState}) {
  
  React.useEffect( ()=>{
    firebaseApp.auth().onAuthStateChanged( (user)=> {
      setAuthState(user)
    })
  },[])

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
        <UserContainer />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
  

  return routes;
}

const mapDistpatchToProps = dispatch => {
  return({
    setAuthState : (user)=>{ dispatch(actions.setAuthState(user))}
  })
}



export default connect(null, mapDistpatchToProps)(Routes)
