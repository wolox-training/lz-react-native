import React from "react";
import "./styles.css";
import {
  WISHLIST,
  ALQUILAR,
  DEVOLVER_ANTES,
  NO_SE_ENCUENTRA
} from "./strings.js";

const MultiStateButton = ({ available, text, disabled, onClick }) => {
  return (
    <div className="button_box">
      <h1 className="unavailable_text">{text}</h1>
      <button
        className={`button ${!available && "wishlist-button"}`}
        disabled={disabled}
        onClick={onClick}
      >
        {available ? ALQUILAR : WISHLIST}
      </button>
    </div>
  );
};

export default MultiStateButton;
