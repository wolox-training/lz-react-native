import React from "react";
import "./styles.css";
import Link from "react-router-dom/Link";
import { NO_HAY_LIBROS_CARGADOS } from "./strings.js";

const Gallery = ({ bookList }) => (
  <div className="suggest">
    {bookList.length ? (
      <div className="suggest_gallery">
        {bookList.slice(0, 4).map(element => (
          <Link key={element.id} to={`/books/${element.book.id}`}>
            <img
              alt={element.book.title}
              className="tiny_books"
              src={element.book.image_url}
            />
          </Link>
        ))}
      </div>
    ) : (
      <h1 className="info_sign">{NO_HAY_LIBROS_CARGADOS}</h1>
    )}
  </div>
);

export default Gallery;
