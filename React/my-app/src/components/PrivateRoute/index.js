import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "../../screens/login";

const PrivateRouter = ({ path, component }) =>
  window.localStorage.signIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );

export default PrivateRouter;
