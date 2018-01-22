import React from "react";

const CommentsForm = ({ text }) => {
  let commentText = "";
  return (
    <form
      onSubmit={(event) => {
        text(commentText);
        event.preventDefault();
      }}
    >
      <input
        className="input input-text"
        onChange={(e) => (commentText = e.target.value)}
      />
      <input className="input input-submit" type="submit" value="Submit" />
    </form>
  );
};

export default CommentsForm;