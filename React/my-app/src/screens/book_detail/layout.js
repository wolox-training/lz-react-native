import React, { Component } from "react";
import { RingLoader } from "react-spinners";
import "./styles.css";
import { Link } from "react-router-dom";
import sugerencias from "../../config/sugerencias.json";
import { ArrayComments } from "../../config/comments";
import Book from "../../components/Book";
import Comment from "../../components/Comment";
import NewComment from "../../components/New_Comment";
import bigDefaultImg from "../../assets/photos/bigDefault.png";
import profilePicture from "../../assets/photos/profilePicture.png";
import NavBarContainer from "../../components/NavBar";
import {
  ALQUILAR,
  SUGERENCIAS,
  COMENTARIOS,
  ENVIAR,
  TEXTO,
  VOLVER
} from "./strings.js";
import strings from "./strings";

const Book_detail = ({ book, loading }) =>
  loading ? (
    <RingLoader />
  ) : (
    <div className="mainContainer">
      <NavBarContainer />
      <Link className="back" to="/">
        {VOLVER}
      </Link>
      <div className="center">
        <div className="info">
          <img className="main_book" src={book.image || bigDefaultImg} />
          <div className="description_box">
            <h1 className="book_title">{book.title}</h1>
            <h1 className="other_info">{book.author}</h1>
            <h1 className="other_info">{book.year}</h1>
            <h1 className="other_info">{book.genre}</h1>
            <p className="description">{TEXTO}</p>
            <button className="rent_button" type="button">
              {ALQUILAR}
            </button>
          </div>
        </div>
        <hr class="barrier" />
        <h1 className="topic">{SUGERENCIAS}</h1>
        <div className="suggest">
          <div className="suggest_gallery">
            {sugerencias.map(element => (
              <img className="tiny_books" src={element.image_url} />
            ))}
          </div>
        </div>
        <hr class="barrier" />
        <h1 className="topic">{COMENTARIOS}</h1>
        <div className="comments">
          <NewComment profileImage={profilePicture} />
          {ArrayComments.map(comment => (
            <Comment
              profileImage={comment.profile_image_url}
              profileName={comment.name}
              date={comment.date}
              comment={comment.text}
            />
          ))}
        </div>
      </div>
    </div>
  );

export default Book_detail;
