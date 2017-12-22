import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import Input from "../../components/Input";
import ErrorMsg from "../../components/ErrorMsg";
import { Link } from "react-router-dom";
import { WBOOKS, INGRESAR, EMAIL, PASSWORD, SIGN_UP } from "./strings";

const Login = ({ onSubmit, emailError, passwordError }) => (
  <div className="login_box">
    <div className="logo">
      <img className="book" src={wBooks} />
      <h1 className="big_title">{WBOOKS}</h1>
    </div>
    <form className="login_form" onSubmit={onSubmit}>
      <Input title={EMAIL} name="email" type="email" />
      <ErrorMsg message={emailError} />
      <Input title={PASSWORD} name="password" type="Password" />
      <ErrorMsg message={passwordError} />
      <button className="enter" type="submit">
        {INGRESAR}
      </button>
    </form>
    <Link to="/sign_up">
      <button className="sign_up" type="button">
        {SIGN_UP}
      </button>
    </Link>
  </div>
);

export default Login;
