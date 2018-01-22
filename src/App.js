import React from 'react';
import './App.css';
import CommentsList from "./CommentsListContainer.js";
import CommentsForm from "./CommentsFormContainer";


const App = () => {
  return (
    <div className="App">
    	<h1>Your comment:</h1>
    	<CommentsForm />
      <CommentsList />
    </div>
  );
};

export default App;