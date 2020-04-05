import React from "react";
import UserProfile from "../Components/user/userProfile";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Components/login/login";
interface Props {
  isAuth: boolean;
}
function PrivateRoute({ isAuth, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function userContainer<Props>({ isAuth }) {
  return (
    <Switch>
      <Route path="/user" exact>
        <Redirect to="/user/profile" />
      </Route>
      <PrivateRoute isAuth={isAuth} path="/user/profile">
        <UserProfile />
      </PrivateRoute>
      <Route path="/user/login">
        {isAuth ? <Redirect to="/weather" /> : <Login /> }
      </Route>

      <Route path="*">
        <h1>not found</h1>
      </Route>
    </Switch>
  );
}

const mapStateToProps = ({ userReducer }) => {
  return {
    isAuth: userReducer.user !== null,
  };
};

export default connect(mapStateToProps, null)(userContainer);
