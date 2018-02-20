import React from "react";
import "./styles.css";
import {
  NOMBRE,
  AUTOR,
  PRECIO,
  AÑO,
  EDITORIAL,
  LINK,
  ACEPTAR,
  CANCELAR
} from "./strings";
import Modal from "react-modal";
import Input from "../Input";

const NewBook = ({ isOpen, onSubmit, disabledComments }) => (
  <div className="new_book_box">
    <Modal isOpen={isOpen} onRequestClose={false}>
      <form className="sign_up_form" onSubmit={onSubmit}>
        <Input title={NOMBRE} name="name" type="text" />
        <Input title={AUTOR} name="surname" type="text" />
        <Input title={PRECIO} name="email" type="email" />
        <Input title={AÑO} name="password" type="Password" />
        <Input title={EDITORIAL} name="confirm_password" type="Password" />
        <div className="decision_box">
          {/* <Link className="cancel" to="/login">
            {CANCELAR}
          </Link> */}
          <button className="accept" type="submit">
            {ACEPTAR}
          </button>
        </div>
      </form>
    </Modal>
  </div>
);

export default NewBook;
