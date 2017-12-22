import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import ErrorMsg from "../../components/ErrorMsg";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
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
  CANCELAR
} from "./strings";

const Login = ({ onSubmit, nameError, emailError, passwordError }) => (
  <div className="sign_up_box">
    <form className="sign_up_form" onSubmit={onSubmit}>
      <Input title={NOMBRE} name="name" type="text" />
      <Input title={APELLIDO} name="surname" type="text" />
      <ErrorMsg message={nameError} />
      <Input title={EMAIL} name="email" type="email" />
      <ErrorMsg message={emailError} />
      <Input title={PASSWORD} name="password" type="Password" />
      <Input
        title={CONFIRMAR_PASSWORD}
        name="confirm_password"
        type="Password"
      />
      <ErrorMsg message={passwordError} />
      <div className="decision_box">
        <Link to="/login">
          <button className="cancel" type="button">
            {CANCELAR}
          </button>
        </Link>
        <button className="accept" type="submit">
          {ACEPTAR}
        </button>
      </div>
    </form>
  </div>
);

export default Login;
