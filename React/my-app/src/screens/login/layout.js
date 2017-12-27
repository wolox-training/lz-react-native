import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import Input from "../../components/Input";
import ErrorMsg from "../../components/ErrorMsg";
import { Link } from "react-router-dom";
import { WBOOKS, INGRESAR, EMAIL, PASSWORD, SIGN_UP } from "./strings";
import Logo from "../../components/Logo";

const Login = ({ onSubmit, emailError, passwordError }) => (
  <div className="login_box">
    <Logo picture={wBooks} text={WBOOKS} />
    <form className="login_form" onSubmit={onSubmit}>
      <Input title={EMAIL} name="email" type="email" error={emailError} />
      <Input
        title={PASSWORD}
        name="password"
        type="Password"
        error={passwordError}
      />
      <button className="enter" type="submit">
        {INGRESAR}
      </button>
    </form>
    <Link className="sign_up" to="/sign_up">
      {SIGN_UP}
    </Link>
  </div>
);

export default Login;
