import React from "react";
import { Redirect, Route } from "react-router-dom";
import PatientActivityPanel from "../../pages/patient/PatientActivityPanel";


export const ProtectedRouteAdmin = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticatedAdmin");
  
  if(isAuthenticated !== "true"){
      window.location = "/admin"
  }

  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/admin"  />
      }
    />
  );
}