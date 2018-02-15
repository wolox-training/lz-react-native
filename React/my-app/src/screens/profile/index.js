import React, { Component } from "react";
import Profile from "./layout";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser, verifyUser } from "../../redux/accounts/actions";
import {
  MAIL_ERROR,
  FORM_INCOMPLETE,
  PASSWORD_SIZE_ERROR,
  PASSWORD_NUMBER_AND_LETTER_ERROR,
  INVALID_USER
} from "./strings";
import {
  formComplete,
  validateSize,
  validateNumberAndLetter,
  validateEmail
} from "../../utils/validations";

class ProfileContainer extends Component {
  state = {
    emailError: null,
    passwordError: null,
    redirect: false
  };

  render() {
    return <Profile />;
  }
}

const mapStateToProps = store => ({
  token: store.account.token,
  error: store.account.error
});

export default connect(mapStateToProps)(ProfileContainer);
