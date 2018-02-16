import React from "react";
import "./styles.css";
// import suggest from "../../config/sugerencias.json";

const Gallery = ({ bookList }) => (
  <div className="suggest">
    <div className="suggest_gallery">
      {bookList.map(element => (
        <img key={element.id} alt={element.title}  className="tiny_books" src={element.book.image_url} />
      ))}
    </div>
  </div>
);

export default Gallery;
