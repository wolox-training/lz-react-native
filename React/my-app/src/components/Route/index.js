import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../../screens/home/index";
import BookDetailContainer from "../../screens/book_detail/index";
import LoginContainer from "../../screens/login";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route path="/books/:id" component={BookDetailContainer} />
      </Switch>
    );
  }
}

export default Router;
