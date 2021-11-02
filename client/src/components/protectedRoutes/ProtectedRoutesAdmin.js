import React from "react";
import { Redirect, Route } from "react-router-dom";
import AdminPanel from "../../pages/admin/AdminPanel";


export const ProtectedRouteAdmin = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  
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
