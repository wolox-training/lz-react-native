import React from "react";
import "./styles.css";
import profilePicture from "../../../../assets/photos/profilePicture.png";
import { ArrayComments } from "../../../../config/comments";
import NewComment from "../../../../components/New_Comment";
import Comment from "../../../../components/Comment";

const CommentBox = ({ onSubmit, comments }) => (
  <div className="comments">
    <NewComment profileImage={profilePicture} onSubmit={onSubmit} />
    {comments
      .slice(0, 4)
      .map(comment => (
        <Comment
          profileImage={comment.user.image_url}
          profileName={`${comment.user.first_name} ${comment.user.last_name}`}
          date={comment.created_at}
          comment={comment.content}
        />
      ))}
  </div>
);

export default CommentBox;
