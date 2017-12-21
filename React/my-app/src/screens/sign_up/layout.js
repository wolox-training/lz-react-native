import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import ErrorMsg from "../../components/ErrorMsg";
import { Link } from "react-router-dom";
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
      {NOMBRE}
      <input name="name" className="data" type="text" />
      {APELLIDO}
      <input name="surname" className="data" type="text" />
      <ErrorMsg message={nameError} />
      {EMAIL}
      <input name="email" className="data" type="email " />
      <ErrorMsg message={emailError} />
      {PASSWORD}
      <input name="password" className="data" type="Password" />
      {CONFIRMAR_PASSWORD}
      <input name="confirm_password" className="data" type="Password" />
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
