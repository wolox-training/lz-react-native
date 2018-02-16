import React from "react";
import "./styles.css";

const Logo = ({ picture, text, size }) => (
  <div className={`${size}_logo`}>
    <img alt="" className={`${size}_book`} src={picture} />
    <h1 className={`${size}_title`}>{text}</h1>
  </div>
);

export default Logo;
