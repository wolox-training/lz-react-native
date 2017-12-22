import React, { Component } from "react";
import Login from "./layout";
import { Redirect } from "react-router-dom";
import HomeContainer from "../home";
import {
  MAIL_ERROR,
  FORM_INCOMPLETE,
  PASSWORD_SIZE_ERROR,
  PASSWORD_NUMBER_AND_LETTER_ERROR
} from "./strings";

import {
  formComplete,
  validateSize,
  validateNumberAndLetter,
  validateEmail
} from "../../utils/validations";

class LoginContainer extends Component {
  state = {
    emailError: null,
    passwordError: null,
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.validateData(event.target.email.value, event.target.password.value)
    ) {
      this.setState({
        emailError: null,
        passwordError: null,
        redirect: true
      });
      window.localStorage.signIn = true;
    }
  };

  validateData(email, password) {
    let ok = true;
    if (!formComplete(email, password)) {
      this.setState({
        emailError: null,
        passwordError: FORM_INCOMPLETE
      });
      ok = false;
    } else {
      if (!validateEmail(email)) {
        this.setState({ emailError: MAIL_ERROR });
        ok = false;
      }
      if (!validateSize(password)) {
        this.setState({
          passwordError: PASSWORD_SIZE_ERROR
        });
        ok = false;
      } else {
        if (!validateNumberAndLetter(password)) {
          this.setState({
            passwordError: PASSWORD_NUMBER_AND_LETTER_ERROR
          });
          ok = false;
        }
      }
    }
    return ok;
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <Login
        redirect={this.state.redirect}
        onSubmit={this.handleSubmit}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    );
  }
}

export default LoginContainer;
