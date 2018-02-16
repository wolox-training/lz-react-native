import React from "react";
import "./styles.css";

const Gallery = ({ bookList }) => (
  <div className="suggest">
    {" "}
    {bookList.length ? (
      <div className="suggest_gallery">
        {bookList
          .slice(0, 4)
          .map(element => (
            <img
              key={element.id}
              alt={element.book.title}
              className="tiny_books"
              src={element.book.image_url}
            />
          ))}
      </div>
    ) : (
      <h1 className="info_sign">{"No hay libros cargados"}</h1>
    )}
  </div>
);

export default Gallery;
