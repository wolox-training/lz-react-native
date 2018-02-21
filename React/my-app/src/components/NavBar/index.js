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
import { addNewBook } from "../../redux/book/actions";
import { formComplete } from "../../utils/validations";
import { CAMPO_INCOMPLETO } from "./strings";

class NavBarContainer extends Component {
  state = {
    showModal: false,
    showDropdown: false,
    showNotification: false,
    error: null
  };

  componentWillMount() {
    if (!this.props.loggedProfile) {
      this.props.dispatch(registerUser(window.localStorage.token));
    }
    this.props.dispatch(getUserNotification(this.props.loggedProfile));
  }

  markAsRead = () => {
    this.props.dispatch(markAllAsRead(this.props.loggedProfile));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, author, link } = event.target;
    if (formComplete([name.value, author.value, link.value])) {
      this.props.dispatch(addNewBook(name.value, author.value, link.value));
      this.setState({
        showModal: false
      });
    } else {
      this.setState({ error: CAMPO_INCOMPLETO });
    }
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
        onSubmit={this.handleSubmit}
        onReadClick={this.markAsRead}
        notification={this.props.notification}
        loggedProfile={this.props.loggedProfile || defaultAvatar}
        onPictureClick={this.handleOnClick}
        onNotificationClick={this.handleOnNotification}
        showDropdown={this.state.showDropdown}
        showNotification={this.state.showNotification}
        showModal={this.state.showModal}
        newBookClick={this.toggleModal}
        error={this.state.error}
      />
    );
  }
}

const mapStateToProps = store => ({
  loggedProfile: store.account.loggedProfile,
  notification: store.account.notification
});

export default connect(mapStateToProps)(NavBarContainer);
