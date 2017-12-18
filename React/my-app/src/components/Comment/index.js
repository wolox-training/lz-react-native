import React from "react";
import "./styles.css";

const Comment = ({ profileImage, profileName, date, comment }) => (
  <div className="comment_box">
    <img className="profile" src={profileImage} />
    <form className="comment_form">
      <h1 className="user_name">{profileName}</h1>
      <h1 className="comment_text">{date}</h1>
      <h1 className="comment_text">{comment}</h1>
    </form>
  </div>
);

export default Comment;
