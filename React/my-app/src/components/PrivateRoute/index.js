import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ path, component }) =>
  window.localStorage.token ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );

export default PrivateRouter;
