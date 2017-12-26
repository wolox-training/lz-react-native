import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import NavBar from "./layout";

class NavBarContainer extends Component {
  state = { showDropdown: false };

  handleOnClick = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  render() {
    return this.state.showDropdown ? (
      <NavBar onPictureClick={this.handleOnClick} show="show" />
    ) : (
      <NavBar onPictureClick={this.handleOnClick} show="unshow" />
    );
  }
}

export default NavBarContainer;
