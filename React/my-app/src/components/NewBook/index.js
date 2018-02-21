import React from "react";
import "./styles.css";
import {
  NOMBRE,
  AUTOR,
  PRECIO,
  AÑO,
  EDITORIAL,
  ACEPTAR,
  CANCELAR,
  SUGERIR_LIBROS,
  LINK
} from "./strings";
import Modal from "react-modal";
import Input from "../Input";
import newBookPng from "../../assets/photos/newBook.png";

const NewBook = ({ isOpen, onSubmit, onClick, error }) => (
  <div className="new_book_box">
    <Modal isOpen={isOpen} ariaHideApp={false}>
      <div className="modal_title">
        <img className="add_book" alt="" src={newBookPng} />
        <h1 className="modal_text_title">{SUGERIR_LIBROS}</h1>
      </div>
      <form className="sign_up_form" onSubmit={onSubmit}>
        <Input title={NOMBRE} name="name" type="text" error={error} />
        <Input title={AUTOR} name="author" type="text" error={error} />
        <Input title={PRECIO} name="price" type="number" />
        <Input title={AÑO} name="year" type="number" />
        <Input title={EDITORIAL} name="editorial" type="text" />
        <Input title={LINK} name="link" type="text" error={error} />
        <div className="decision_box">
          <button className="cancel_button" onClick={onClick}>
            {CANCELAR}
          </button>
          <button className="accept" type="submit">
            {ACEPTAR}
          </button>
        </div>
      </form>
    </Modal>
  </div>
);

export default NewBook;
