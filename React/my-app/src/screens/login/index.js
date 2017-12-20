import React, { Component } from "react";
import Login from "./layout";
import { Redirect } from "react-router-dom";
import HomeContainer from "../home";
import {
  camposCompletos,
  validarTamanio,
  validarNumeroYLetra,
  formatoMailValido
} from "../../utils/validations";

class LoginContainer extends Component {
  state = {
    emailError: null,
    passwordError: null,
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    debugger;
    if (
      this.validateData(event.target.email.value, event.target.password.value)
    ) {
      this.setState({ redirect: true });
      window.localStorage.signIn = true;
    }
  };

  validateData(email, password) {
    let ok = true;
    if (!camposCompletos(email, password)) {
      this.setState({
        emailError: null,
        passwordError: "Todos los campos deben estar completos"
      });
      ok = false;
    } else {
      if (!formatoMailValido(email)) {
        this.setState({ emailError: "El formato del mail no es valido" });
        ok = false;
      }
      if (!validarTamanio(password)) {
        this.setState({
          passwordError: "La contraseña debe tener entre 8 y 52 caracteres"
        });
        ok = false;
      } else {
        if (!validarNumeroYLetra(password)) {
          this.setState({
            passwordError:
              "La contraseña debe tener contener un numero y una letra"
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
