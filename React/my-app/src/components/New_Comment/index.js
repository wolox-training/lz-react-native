import React from "react";
import "./styles.css";
import { AGREGAR_COMENTARIO, ENVIAR } from "./strings.js";
import defaultProfile from "../../assets/photos/default-avatar.png";

const NewComment = ({ profileImage }) => (
  <div className="new_comment_box">
    <img className="profile" src={profileImage || defaultProfile} />
    <form className="comment_form">
      <h1 className="user_name">{AGREGAR_COMENTARIO}</h1>
      <textarea type="text" className="input_comments" />
      <button className="send_button" type="button">
        {ENVIAR}
      </button>
    </form>
  </div>
);

export default NewComment;
