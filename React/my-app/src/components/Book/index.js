import React from "react";
import "./styles.css";
import defaultImg from "../../assets/photos/default.png";

const Book = ({ imageUrl, title, author }) => (
  <div className="book_info">
    <img className="cover" src={imageUrl ? imageUrl : defaultImg} />
    <h1 className="title"> {title}</h1>
    <h1 className="author"> {author}</h1>
  </div>
);

export default Book;
