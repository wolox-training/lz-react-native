import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../../screens/home/index";
import BookDetailContainer from "../../screens/book_detail/index";
import LoginContainer from "../../screens/login";
import SignUpContainer from "../../screens/sign_up";
import PrivateRoute from "../PrivateRoute";

class Router extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/sign_up" component={SignUpContainer} />
        <PrivateRoute path="/books/:id" component={BookDetailContainer} />
      </Switch>
    );
  }
}

export default Router;
