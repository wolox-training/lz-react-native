import React, { Component } from "react";
import "./styles.css";
import NavBar from "./layout";
import { connect } from "react-redux";
import defaultAvatar from "../../assets/photos/default-avatar.png";
import { registerUser } from "../../redux/accounts/actions";

class NavBarContainer extends Component {
  state = { showDropdown: false, showNotification: false };

  componentDidMount() {
    if (!this.props.loggedProfile) {
      this.props.dispatch(registerUser(window.localStorage.token));
    }
  }

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
        loggedProfile={this.props.loggedProfile || defaultAvatar}
        onPictureClick={this.handleOnClick}
        onNotificationClick={this.handleOnNotification}
        showDropdown={this.state.showDropdown}
        showNotification={this.state.showNotification}
      />
    );
  }
}

const mapStateToProps = store => ({
  loggedProfile: store.account.loggedProfile
});

export default connect(mapStateToProps)(NavBarContainer);
