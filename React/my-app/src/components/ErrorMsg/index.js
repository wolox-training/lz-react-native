import React from "react";
import stylesCss from "./styles.css";

const ErrorMsg = ({ message }) => {
  if (message) {
    return <h1 className="error"> {message} </h1>;
  }
  return <h1> </h1>;
};
export default ErrorMsg;
