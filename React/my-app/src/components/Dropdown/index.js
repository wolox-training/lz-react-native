import React, { Component } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";
import Dropdown from "./layout";

class DropdownContainer extends Component {
  state = { redirect: false };

  handleOnClick = () => {
    window.localStorage.clear();
    this.setState({ redirect: true });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/login" />
    ) : (
      <Dropdown show={this.props.show} logOut={this.handleOnClick} />
    );
  }
}

export default DropdownContainer;
