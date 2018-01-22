import React from "react";
import Comment from "./CommentContainer";

const CommentsList = ({ comments }) => {
  return (
    <ul id="list">
      {comments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </ul>
  );
};

export default CommentsList;