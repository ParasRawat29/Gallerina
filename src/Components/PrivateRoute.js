import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Container, Loader } from "rsuite";
import { ProfileContext } from "../context/profile.context";

function PrivateRoute({ children, ...routeProps }) {
  const { profiles, isLoading } = useContext(ProfileContext);
  console.log("private", isLoading, profiles);

  if (isLoading) {
    <Container>
      <Loader center vertical content="loading" size="lg" speed="slow" />
    </Container>;
  }
  if (!profiles && !isLoading) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
