import React from "react";
import { Redirect, Route } from "react-router-dom";
import PatientActivityPanel from "../../pages/patient/PatientActivityPanel";


export const ProtectedRoutePatient = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticatedPatient");
  
  if(isAuthenticated !== "true"){
      window.location = "/"
  }

  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/"  />
      }
    />
  );
}
