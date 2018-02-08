import React from "react";
import "./styles.css";
import {
  WISHLIST,
  ALQUILAR,
  DEVOLVER_ANTES,
  NO_SE_ENCUENTRA
} from "./strings.js";

const MultiStateButton = ({ available, not = !available, text, disabled }) => {
  return (
    <div className="button_box">
      <h1 className="unavailable_text">{available ? "" : text}</h1>
      <button
        className={`button ${not && "wishlist-button"}`}
        disabled={disabled}
      >
        {available ? ALQUILAR : WISHLIST}
      </button>
    </div>
  );
};

export default MultiStateButton;
