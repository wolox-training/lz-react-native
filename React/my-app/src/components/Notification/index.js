import React from "react";
import "./styles.css";
import defaultImg from "../../assets/photos/default.png";
import { TIEMPO, TITULO, AUTOR, DISPONIBILIDAD, FECHA } from "./strings";

const Notification = ({ show }) => (
  <div className={`${show}_notification`}>
    <a className="item">
      <img alt="" src={defaultImg} className="portrait" />
      <div className="notification">
        <h1>{DISPONIBILIDAD}</h1>
        <h1>{TITULO}</h1>
        <h1>{AUTOR}</h1>
      </div>
    </a>
    <a className="item">
      <img alt="" src={defaultImg} className="portrait" />
      <div className="notification">
        <h1>{TIEMPO}</h1>
        <h1>{TITULO}</h1>
        <h1>{AUTOR}</h1>
        <h1>{FECHA}</h1>
      </div>
    </a>
  </div>
);

export default Notification;
