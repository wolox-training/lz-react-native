import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import { Link } from "react-router-dom";

import { WBOOKS, INGRESAR, EMAIL, PASSWORD } from "./strings";

const Login = ({ onCLick }) => (
  <div className="login_box">
    <div className="logo">
      <img className="book" src={wBooks} />
      <h1 className="big_title">{WBOOKS}</h1>
    </div>
    <form className="login_form">
      {EMAIL} <input name="mail" className="data" type="email " />
      {PASSWORD} <input name="password" className="data" type="Password" />
      <button className="enter" type="submit" onClick={onCLick}>
        {INGRESAR}
      </button>
    </form>
  </div>
);

export default Login;
