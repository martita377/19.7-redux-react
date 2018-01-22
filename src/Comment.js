import React from 'react';

const Comment = ({
  text,
  votes,
  id,
  votePlus,
  voteMinus,
  deleteComment
}) => {
  return (
    <li className="item">
      {text}
      <div className = "btn-votes">
        <span className="counter">votes: {votes}</span>
        <button className="btn btn-up" onClick={() => votePlus(id)}>
          +
        </button>
        <button className="btn btn-down" onClick={() => voteMinus(id)}>
          -
        </button>
        <button className="btn btn-del" onClick={() => deleteComment(id)}>
          x
        </button>
      </div>
    </li>
  );
};

export default Comment;