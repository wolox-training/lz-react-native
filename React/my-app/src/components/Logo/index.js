import React from "react";
import "./styles.css";

const Logo = ({ picture, text }) => (
  <div className="logo">
    <img className="book" src={picture} />
    <h1 className="big_title">{text}</h1>
  </div>
);

export default Logo;
