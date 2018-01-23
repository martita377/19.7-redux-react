import React from "react";

const CommentsForm = ({ text }) => {
  let commentText = "";
  return (
    <form
      onSubmit={(event) => {
        text(commentText);
        event.preventDefault();
        this.input.value='';
      }}
    >
      <input
        className="input input-text"
        ref = {input => {this.input = input}}
        onChange={(e) => (commentText = e.target.value)}
      />
      <input className="input input-submit" type="submit" value="Submit" />
    </form>
  );
};

export default CommentsForm;