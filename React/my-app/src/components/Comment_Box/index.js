import React from "react";
import "./styles.css";
import defaultProfile from "../../assets/photos/default-avatar.png";
import profilePicture from "../../assets/photos/profilePicture.png";
import { ArrayComments } from "../../config/comments";
import NewComment from "../New_Comment";
import Comment from "../Comment";

const CommentBox = () => (
  <div className="comments">
    <NewComment profileImage={profilePicture} />
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
