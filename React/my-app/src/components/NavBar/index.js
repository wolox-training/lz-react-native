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
    return (
      <NavBar
        onPictureClick={this.handleOnClick}
        show={this.state.showDropdown}
      />
    );
  }
}

export default NavBarContainer;
