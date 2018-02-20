import React from "react";
import "./styles.css";
import Link from "react-router-dom/Link";
import defaultImg from "../../assets/photos/default.png";

const Gallery = ({ bookList }) => (
  <div className="suggest">
    {bookList.length ? (
      <div className="suggest_gallery">
        {bookList.slice(0, 4).map(element => (
          <Link key={element.id} to={`/books/${element.id}`}>
            <img
              alt={element.title}
              className="tiny_books"
              src={element.image_url || defaultImg}
            />
          </Link>
        ))}
      </div>
    ) : (
      <h1 className="info_sign">{"No hay libros cargados"}</h1>
    )}
  </div>
);

export default Gallery;
