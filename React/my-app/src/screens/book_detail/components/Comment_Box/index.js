import React from "react";
import "./styles.css";
import profilePicture from "../../../../assets/photos/profilePicture.png";
import { ArrayComments } from "../../../../config/comments";
import NewComment from "../../../../components/New_Comment";
import Comment from "../../../../components/Comment";

const CommentBox = ({ onSubmit, comments, disabledComments }) => (
  <div className="comments">
    <NewComment
      profileImage={profilePicture}
      onSubmit={onSubmit}
      disabledComments={disabledComments}
    />
    {comments.slice(0, 4).map(comment => <Comment comment={comment} />)}
  </div>
);

export default CommentBox;
