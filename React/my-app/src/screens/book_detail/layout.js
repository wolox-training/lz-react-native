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
  DISPONIBLE,
  ALQUILADO,
  USUARIO,
  SUGERENCIAS,
  COMENTARIOS,
  ENVIAR,
  VOLVER
} from "./strings.js";
import DescriptionBox from "./components/Description_Box";
import CommentBox from "./components/Comment_Box";
import RentButton from "./components/RentButton";
import strings from "./strings";
import Suggest from "../../components/Suggest";

const Book_detail = ({
  book,
  bookAvailable,
  loading,
  disabled,
  text,
  onClick
}) => (
  <div className="mainContainer">
    <NavBarContainer />
    <Link className="back" to="/">
      {VOLVER}
    </Link>
    {loading ? (
      <RingLoader />
    ) : (
      <div className="center">
        <div className="info">
          <img className="main_book" src={book.image_url || bigDefaultImg} />
          <div className="status_box">
            <DescriptionBox book={book} />
            <RentButton
              available={bookAvailable}
              disabled={disabled}
              text={text}
              onClick={onClick}
            />
          </div>
        </div>
        <hr class="barrier" />
        <h1 className="topic">{SUGERENCIAS}</h1>
        <Suggest />
        <hr class="barrier" />
        <h1 className="topic">{COMENTARIOS}</h1>
        <CommentBox />
      </div>
    )}
  </div>
);

export default Book_detail;
