import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import { Link } from "react-router-dom";

import { WBOOKS, INGRESAR } from "./strings";

const Login = () => (
  <div className="login_box">
    <div className="logo">
      <img className="book" src={wBooks} />
      <h1 className="big_title">{WBOOKS}</h1>
    </div>
    <Link to={`/`}>
      <button className="enter" type="button">
        {INGRESAR}
      </button>
    </Link>
  </div>
);

export default Login;
