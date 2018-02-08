import React, { Component } from "react";
import Login from "./layout";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyUser } from "../../redux/accounts/actions";
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

class LoginContainer extends Component {
  state = {
    emailError: null,
    passwordError: null,
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target;
    if (this.validateData(email.value, password.value)) {
      this.validateUser(email.value, password.value);
    }
  };

  validateUser(email, password) {
    this.props.dispatch(verifyUser({ email: email, password: password }));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.error) {
      this.setState({
        emailError: null,
        passwordError: INVALID_USER
      });
    } else {
      window.localStorage.token = newProps.token;
      this.setState({
        emailError: null,
        passwordError: null,
        redirect: true
      });
    }
  }

  validateData(email, password) {
    let ok = true;
    if (!formComplete([email, password])) {
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
        onSubmit={this.handleSubmit}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    );
  }
}

const mapStateToProps = store => ({
  token: store.account.token,
  error: store.account.error
});

export default connect(mapStateToProps)(LoginContainer);
