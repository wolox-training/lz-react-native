import React from "react";
import "./styles.css";
import ErrorMsg from "../ErrorMsg";

const Input = ({ title, name, type, error }) => (
  <div className="input_box">
    <h1 className="text"> {title}</h1>
    <input name={name} className="data" type={type} />
    <ErrorMsg message={error} />
  </div>
);

export default Input;
