import React, { Component } from "react";
import SignUp from "./layout.js";
import {
  formComplete,
  validateSize,
  validateNumberAndLetter,
  validateEmail,
  validateOnlyLetters
} from "../../utils/validations";
import {
  MAIL_ERROR,
  FORM_INCOMPLETE,
  PASSWORD_SIZE_ERROR,
  PASSWORD_TYPE_ERROR,
  NAME_ERROR
} from "./strings";

class SignUpContainer extends Component {
  state = {
    nameError: null,
    emailError: null,
    passwordError: null,
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validateData(
      event.target.name.value,
      event.target.surname.value,
      event.target.email.value,
      event.target.password.value,
      event.target.confirm_password.value
    );
  };

  validateData(name, surname, email, password, confirm_password) {
    let ok = true;
    if (!formComplete([name, surname, email, password, confirm_password])) {
      this.setState({
        emailError: null,
        passwordError: FORM_INCOMPLETE
      });
      ok = false;
    } else {
      if (!validateOnlyLetters([name, surname])) {
        this.setState({ nameError: NAME_ERROR });
        ok = false;
      } else {
        this.setState({ nameError: null });
      }
      if (!validateEmail(email)) {
        this.setState({ emailError: MAIL_ERROR });
        ok = false;
      } else {
        this.setState({ emailError: null });
      }
      if (!validateSize(password)) {
        this.setState({
          passwordError: PASSWORD_SIZE_ERROR
        });
        ok = false;
      } else {
        if (!validateNumberAndLetter(password)) {
          this.setState({
            passwordError: PASSWORD_TYPE_ERROR
          });
          ok = false;
        } else {
          this.setState({ passwordError: null });
        }
      }
    }
    return ok;
  }

  render() {
    return (
      <SignUp
        onSubmit={this.handleSubmit}
        nameError={this.state.nameError}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    );
  }
}

export default SignUpContainer;
