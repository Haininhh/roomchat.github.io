import React from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";

const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = Boolean(localStorage.getItem("email"));
  if (!isLoggedIn) {
    localStorage.removeItem("email");
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
