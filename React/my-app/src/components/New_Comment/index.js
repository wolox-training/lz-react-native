import React from "react";
import "./styles.css";
import { AGREGAR_COMENTARIO, ENVIAR } from "./strings.js";
import defaultProfile from "../../assets/photos/default-avatar.png";
import Input from "../Input";

const NewComment = ({ profileImage, onSubmit }) => (
  <div className="new_comment_box">
    <img className="profile" src={profileImage || defaultProfile} />
    <form className="comment_form" onSubmit={onSubmit}>
      <h1 className="user_name">{AGREGAR_COMENTARIO}</h1>
      <textarea className="input_comments" type="text" name="comment" />
      <button className="send_button" type="submit">
        {ENVIAR}
      </button>
    </form>
  </div>
);

export default NewComment;
