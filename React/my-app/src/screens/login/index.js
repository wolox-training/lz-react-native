import React, { Component } from "react";
import Login from "./layout";

class LoginContainer extends Component {
  handleOnCLick = () => {
    debugger;
    console.log("hey");
  };

  validarDatos() {
    if (false) {
    }
  }

  render() {
    return <Login onClick={this.handleOnCLick} />;
  }
}

export default LoginContainer;
