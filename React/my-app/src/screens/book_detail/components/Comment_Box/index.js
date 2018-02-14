import React from "react";
import "./styles.css";
import profilePicture from "../../../../assets/photos/profilePicture.png";
import { ArrayComments } from "../../../../config/comments";
import NewComment from "../../../../components/New_Comment";
import Comment from "../../../../components/Comment";

const CommentBox = ({ onSubmit }) => (
  <div className="comments">
    <NewComment profileImage={profilePicture} onSubmit={onSubmit} />
    {ArrayComments.map(comment => (
      <Comment
        profileImage={comment.profile_image_url}
        profileName={comment.name}
        date={comment.date}
        comment={comment.text}
      />
    ))}
  </div>
);

export default CommentBox;
