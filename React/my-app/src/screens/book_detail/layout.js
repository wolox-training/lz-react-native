import React from "react";
import { RingLoader } from "react-spinners";
import "./styles.css";
import { Link } from "react-router-dom";
import bigDefaultImg from "../../assets/photos/bigDefault.png";
import suggests from "../../config/sugerencias.json";
import NavBarContainer from "../../components/NavBar";
import { SUGERENCIAS, COMENTARIOS, VOLVER } from "./strings.js";
import DescriptionBox from "./components/Description_Box";
import CommentBox from "./components/Comment_Box";
import RentButton from "./components/RentButton";
import Gallery from "../../components/Gallery";

const BookDetail = ({
  book,
  bookAvailable,
  loading,
  disabled,
  text,
  onClick,
  onSubmit,
  comments,
  disabledComments
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
          <img
            alt={book.id}
            className="main_book"
            src={book.image_url || bigDefaultImg}
          />
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
        <hr className="barrier" />
        <h1 className="topic">{SUGERENCIAS}</h1>
        <Gallery bookList={suggests} />
        <hr className="barrier" />
        <h1 className="topic">{COMENTARIOS}</h1>
        <CommentBox
          onSubmit={onSubmit}
          comments={comments}
          disabledComments={disabledComments}
        />
      </div>
    )}
  </div>
);

export default BookDetail;
