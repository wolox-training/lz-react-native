import React from "react";
import "./styles.css";
import suggest from "../../config/sugerencias.json";

const Suggest = () => (
  <div className="suggest">
    <div className="suggest_gallery">
      {suggest.map(element => (
        <img
          key={element.id}
          alt={element.id}
          className="tiny_books"
          src={element.image_url}
        />
      ))}
    </div>
  </div>
);

export default Suggest;
