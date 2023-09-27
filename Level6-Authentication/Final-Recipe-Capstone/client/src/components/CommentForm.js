import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function CommentForm(props) {
  const { _id } = props;
  const { user, addNewComment } = useContext(UserContext);
  const initInputs = {
    commentText: "",
    username: user.username,
  };
  const [input, setInput] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewComment(input, _id);
    setInput({ commentText: "", username: user.username }); // Clear the input after submission
  }

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="commentText"
        value={input.commentText}
        onChange={handleChange}
        placeholder="Write a Comment"
        className="comment-input"
      ></input>
      <button className="postCommentBtn">Post</button>
    </form>
  );
}
