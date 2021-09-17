import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Container, Loader } from "rsuite";
import { ProfileContext } from "../context/profile.context";

function PublicRoute({ children, ...routeProps }) {
  const { profiles, isLoading } = useContext(ProfileContext);
  console.log("public", isLoading, profiles);

  if (isLoading && !profiles) {
    <Container>
      <Loader center vertical content="loading" size="md" speed="slow" />
    </Container>;
  }
  if (profiles && !isLoading) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
