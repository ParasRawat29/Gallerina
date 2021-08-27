import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { ProfileContext } from "../context/profile.context";

function PublicRoute({ children, ...routeProps }) {
  const profiles = useContext(ProfileContext);

  if (profiles) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
