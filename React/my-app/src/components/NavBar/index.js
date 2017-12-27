import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import NavBar from "./layout";

class NavBarContainer extends Component {
  state = { showDropdown: false, showNotification: false };

  handleOnClick = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
      showNotification: false
    });
  };

  handleOnNotification = () => {
    this.setState({
      showNotification: !this.state.showNotification,
      showDropdown: false
    });
  };

  handleUnshow = () => {
    this.setState({
      showNotification: false,
      showDropdown: false
    });
  };

  render() {
    return (
      <NavBar
        onPictureClick={this.handleOnClick}
        onNotificationClick={this.handleOnNotification}
        showDropdown={this.state.showDropdown}
        showNotification={this.state.showNotification}
      />
    );
  }
}

export default NavBarContainer;
