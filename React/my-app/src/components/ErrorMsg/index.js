import React from "react";
import stylesCss from "./styles.css";

const ErrorMsg = ({ message }) =>
  message && <h1 className="error"> {message} </h1>;

export default ErrorMsg;
