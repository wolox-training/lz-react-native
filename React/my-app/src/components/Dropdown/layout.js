import React from "react";
import stylesCss from "./styles.css";
import { PERFIL, CERRAR_SESION } from "./strings";

const Dropdown = ({ show, logOut }) => (
  <div className={`${show}_dropdown`}>
    <a>{PERFIL}</a>
    <a onClick={logOut}>{CERRAR_SESION}</a>
  </div>
);

export default Dropdown;
