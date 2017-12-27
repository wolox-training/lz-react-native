import React, { Component } from "react";
import SignUp from "./layout.js";
import { Redirect } from "react-router-dom";
import { postAccount, newUser } from "../../service/accounts";
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
  NAME_ERROR,
  SURNAME_ERROR,
  MAIL_IN_USE,
  DIFFERENT_PASSWORD
} from "./strings";

class SignUpContainer extends Component {
  state = {
    nameError: null,
    surnameError: null,
    emailError: null,
    passwordError: null,
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, surname, email, password, confirm_password } = event.target;
    this.validateData(
      name.value,
      surname.value,
      email.value,
      password.value,
      confirm_password.value
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
      if (!validateOnlyLetters(name)) {
        this.setState({ nameError: NAME_ERROR });
        ok = false;
      } else {
        this.setState({ nameError: null });
      }
      if (!validateOnlyLetters(surname)) {
        this.setState({ surnameError: SURNAME_ERROR });
        ok = false;
      } else {
        this.setState({ surnameError: null });
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
        if (password != confirm_password) {
          this.setState({ passwordError: DIFFERENT_PASSWORD });
          ok = false;
        } else {
          this.setState({ passwordError: null });
        }
      }
    }
    if (ok) {
      this.addNewUser(name, surname, email, password, confirm_password);
    }
  }

  addNewUser(name, surname, email, password, confirm_password) {
    newUser(
      {
        user: {
          email: email,
          password: password,
          confirm_password: confirm_password,
          first_name: name,
          last_name: surname,
          locale: "en"
        }
      },
      this.onSuccess,
      this.onFailure
    );
  }

  onSuccess = () => {
    this.setState({ redirect: true });
  };

  onFailure = () => {
    this.setState({ emailError: MAIL_IN_USE });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/login" />
    ) : (
      <SignUp
        onSubmit={this.handleSubmit}
        nameError={this.state.nameError}
        surnameError={this.state.surnameError}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    );
  }
}

export default SignUpContainer;
