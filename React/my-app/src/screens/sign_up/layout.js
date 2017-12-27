import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import ErrorMsg from "../../components/ErrorMsg";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import {
  WBOOKS,
  INGRESAR,
  EMAIL,
  PASSWORD,
  CONFIRMAR_PASSWORD,
  SIGN_UP,
  NOMBRE,
  APELLIDO,
  ACEPTAR,
  LOGO_SIZE,
  CANCELAR
} from "./strings";

const Login = ({
  onSubmit,
  nameError,
  surnameError,
  emailError,
  passwordError
}) => (
  <div className="sign_up_box">
    <Logo picture={wBooks} text={WBOOKS} size={LOGO_SIZE} />
    <form className="sign_up_form" onSubmit={onSubmit}>
      <Input title={NOMBRE} name="name" type="text" error={nameError} />
      <Input title={APELLIDO} name="surname" type="text" error={surnameError} />
      <Input title={EMAIL} name="email" type="email" error={emailError} />
      <Input
        title={PASSWORD}
        name="password"
        type="Password"
        error={passwordError}
      />
      <Input
        title={CONFIRMAR_PASSWORD}
        name="confirm_password"
        type="Password"
        error={passwordError}
      />
      <div className="decision_box">
        <Link className="cancel" to="/login">
          {CANCELAR}
        </Link>
        <button className="accept" type="submit">
          {ACEPTAR}
        </button>
      </div>
    </form>
  </div>
);

export default Login;
