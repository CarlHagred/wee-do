import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRouteAdmin = ({
  component: Component,
  ...restOfProps
}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticatedAdmin");

  if (isAuthenticated !== "true") {
    window.location = "/admin";
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/admin" />
      }
    />
  );
};
