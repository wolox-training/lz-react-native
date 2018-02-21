import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { PERFIL, CERRAR_SESION } from "./strings";

const Dropdown = ({ show, logOut }) => (
  <div className={`${show}_dropdown`}>
    <Link to={`/profile/${window.localStorage.userId}`}>
      <h1 className="item">{PERFIL}</h1>
    </Link>
    <a className="item" onClick={logOut}>
      {CERRAR_SESION}
    </a>
  </div>
);

export default Dropdown;
