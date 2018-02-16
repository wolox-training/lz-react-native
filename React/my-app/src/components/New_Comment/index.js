import React from "react";
import "./styles.css";
import { AGREGAR_COMENTARIO, ENVIAR } from "./strings.js";
import defaultProfile from "../../assets/photos/default-avatar.png";

const NewComment = ({ profileImage, onSubmit, disabledComments }) => (
  <div className="new_comment_box">
    <img alt="" className="profile" src={profileImage || defaultProfile} />
    <form className="comment_form" onSubmit={onSubmit}>
      <h1 className="user_name">{AGREGAR_COMENTARIO}</h1>
      <textarea
        className="input_comments"
        type="text"
        name="comment"
        maxLength="255"
      />
      <button className="send_button" type="submit" disabled={disabledComments}>
        {ENVIAR}
      </button>
    </form>
  </div>
);

export default NewComment;
