import React from "react";
import "./styles.css";
import { PERFIL, CERRAR_SESION } from "./strings";

const Dropdown = ({ show, logOut }) => (
  <div className={`${show}_dropdown`}>
    <a className="item">{PERFIL}</a>
    <a className="item" onClick={logOut}>
      {CERRAR_SESION}
    </a>
  </div>
);

export default Dropdown;
