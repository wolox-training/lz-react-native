import React from "react";
import "./styles.css";
import defaultProfile from "../../../../assets/photos/default-avatar.png";
import MultiStateButton from "../../../../components/MultiStateButton";

import { ALQUILAR, TEXTO } from "./strings.js";

const DescriptionBox = ({ book }) => (
  <div className="description_box">
    <h1 className="book_title">{book.title}</h1>
    <h1 className="other_info">{book.author}</h1>
    <h1 className="other_info">{book.year}</h1>
    <h1 className="other_info">{book.genre}</h1>
    <p className="description">{TEXTO}</p>
  </div>
);

export default DescriptionBox;
