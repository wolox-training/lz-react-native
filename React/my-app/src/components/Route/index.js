import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../../screens/home/index";
import BookDetailContainer from "../../screens/book_detail/index";
import LoginContainer from "../../screens/login";
import PrivateRoute from "../PrivateRoute";

class Router extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <PrivateRoute path="/books/:id" component={BookDetailContainer} />
      </Switch>
    );
  }
}

export default Router;
