import React from "react";
import "./styles.css";
import Link from "react-router-dom/Link";
import defaultProfile from "../../assets/photos/default-avatar.png";

const Comment = ({ comment }) => (
  <div className="comment_box">
    <Link to={`/profile/${comment.user.id}`}>
      <img
        alt=""
        className="profile"
        src={comment.user.image_url || defaultProfile}
      />
    </Link>
    <form className="comment_form">
      <h1 className="user_name">{`${comment.user.first_name} ${
        comment.user.last_name
      }`}</h1>
      <h1 className="comment_text">{comment.created_at}</h1>
      <h1 className="comment_text">{comment.content}</h1>
    </form>
  </div>
);

export default Comment;
