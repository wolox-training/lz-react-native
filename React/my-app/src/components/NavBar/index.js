import React, { Component } from "react";
import "./styles.css";
import NavBar from "./layout";
import { connect } from "react-redux";
import defaultAvatar from "../../assets/photos/default-avatar.png";
import {
  registerUser,
  getUserNotification,
  markAllAsRead
} from "../../redux/accounts/actions";

class NavBarContainer extends Component {
  state = { showModal: false, showDropdown: false, showNotification: false };

  componentWillMount() {
    if (!this.props.loggedProfile) {
      this.props.dispatch(registerUser(window.localStorage.token));
    }
    this.props.dispatch(getUserNotification(this.props.loggedProfile));
  }

  markAsRead = () => {
    this.props.dispatch(markAllAsRead(this.props.loggedProfile));
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

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
        onReadClick={this.markAsRead}
        notification={this.props.notification}
        loggedProfile={this.props.loggedProfile || defaultAvatar}
        onPictureClick={this.handleOnClick}
        onNotificationClick={this.handleOnNotification}
        showDropdown={this.state.showDropdown}
        showNotification={this.state.showNotification}
        showModal={this.state.showModal}
        newBookClick={this.toggleModal}
      />
    );
  }
}

const mapStateToProps = store => ({
  loggedProfile: store.account.loggedProfile,
  notification: store.account.notification
});

export default connect(mapStateToProps)(NavBarContainer);
