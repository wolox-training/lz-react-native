
import React from "react";
import "./styles.css";
import defaultImg from "../../assets/photos/default.png";
import { Link } from "react-router-dom";

const Book = ({ id, imageUrl, title, author }) => (
  <Link to={`/books/${id}`}>
    <div className="book_info">
      <img className="cover" src={imageUrl} />
      <h1 className="title">{title}</h1>
      <h1 className="author">{author}</h1>
    </div>
  </Link>
);

Book.defaultProps = {
  imageUrl: defaultImg
};

export default Book;
