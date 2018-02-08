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
  DISPONIBLE,
  ALQUILADO,
  USUARIO,
  DEVOLVER_ANTES,
  NO_SE_ENCUENTRA,
  WISHLIST,
  SUGERENCIAS,
  COMENTARIOS,
  ENVIAR,
  TEXTO,
  VOLVER
} from "./strings.js";
import DescriptionBox from "./components/Description_Box";
import CommentBox from "./components/Comment_Box";
import strings from "./strings";
import Suggest from "../../components/Suggest";

const Book_detail = ({ book, bookStatus, text, loading }) =>
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
          <img className="main_book" src={book.image_url || bigDefaultImg} />
          <DescriptionBox book={book} />
        </div>
        <hr class="barrier" />
        <h1 className="topic">{SUGERENCIAS}</h1>
        <Suggest />
        <hr class="barrier" />
        <h1 className="topic">{COMENTARIOS}</h1>
        <CommentBox />
      </div>
    </div>
  );

export default Book_detail;
