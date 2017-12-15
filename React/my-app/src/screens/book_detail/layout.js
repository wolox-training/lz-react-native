import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import sugerencias from "../../config/sugerencias.json";
import Book from "../../components/Book";
import bigDefaultImg from "../../assets/photos/bigDefault.png";
import {
  ALQUILAR,
  SUGERENCIAS,
  COMENTARIOS,
  ENVIAR,
  TEXTO,
  AGREGAR_COMENTARIO
} from "./strings.js";
import strings from "./strings";

const Book_detail = ({ image, title, author, year, genre }) => (
  <div className="mainContainer">
    <Link className="back" to="/">
      {"<- Volver"}
    </Link>
    <div className="center">
      <div className="info">
        <img className="main_book" src={image} />
        <div className="description_box">
          <h1 className="book_title">{title}</h1>
          <h1 className="other_info">{author}</h1>
          <h1 className="other_info">{year}</h1>
          <h1 className="other_info">{genre}</h1>
          <p className="description">{TEXTO}</p>
          <button className="rent_button" type="button">
            {ALQUILAR}
          </button>
        </div>
      </div>
      <hr class="barrier" />
      <div className="suggest">
        <h1 className="topic">{SUGERENCIAS}</h1>
        <div className="suggest_gallery">
          {sugerencias.map(element => (
            <img className="tiny_books" src={element.image_url} />
          ))}
        </div>
      </div>
      <hr class="barrier" />
      <div className="comments">
        <h1 className="topic">{COMENTARIOS}</h1>
        <form className="comment_form">
          <h1 className="user_name">{AGREGAR_COMENTARIO}</h1>
          <input type="text" className="input_comments" />
          <button className="send_button" type="button">
            {ENVIAR}
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Book_detail;
