import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { ProfileContext } from "../context/profile.context";

function PrivateRoute({ children, ...routeProps }) {
  const profiles = useContext(ProfileContext);
  console.log(profiles);
  if (!profiles) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
