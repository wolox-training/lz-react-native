import React from "react";
import "./styles.css";

const Input = ({ title, name, type }) => (
  <div className="input_box">
    <h1 className="text"> {title}</h1>
    <input name={name} className="data" type={type} />
  </div>
);

export default Input;
