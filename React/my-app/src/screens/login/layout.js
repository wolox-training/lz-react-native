import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import { Link } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";
import { Redirect } from "react-router-dom";
import { WBOOKS, INGRESAR, EMAIL, PASSWORD } from "./strings";

const Login = ({ redirect, onSubmit, emailError, passwordError }) => (
  <div className="login_box">
    {redirect ? <Redirect to="/" /> : <h1 />}
    <div className="logo">
      <img className="book" src={wBooks} />
      <h1 className="big_title">{WBOOKS}</h1>
    </div>
    <form className="login_form" onSubmit={onSubmit}>
      {EMAIL}
      <input name="email" className="data" type="email " />
      <ErrorMsg message={emailError} />
      {PASSWORD}
      <input name="password" className="data" type="Password" />
      <ErrorMsg message={passwordError} />
      <button className="enter" type="submit">
        {INGRESAR}
      </button>
    </form>
  </div>
);

export default Login;
