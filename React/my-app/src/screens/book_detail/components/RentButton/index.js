import React from "react";
import "./styles.css";
import { WISHLIST, ALQUILAR } from "./strings.js";

const RentButton = ({ available, text, ...buttonProps }) => {
  return (
    <div className="button_box">
      <h1 className="unavailable_text">{text}</h1>
      <button
        className={`button ${!available && "wishlist-button"}`}
        {...buttonProps}
      >
        {available ? ALQUILAR : WISHLIST}
      </button>
    </div>
  );
};

export default RentButton;
