import React from "react"; //{ useState, useEffect }

const CommentSection = ({ token }) => {
  return (
    <div>
      <h2>Comment</h2>

      <div>
        <textarea placeholder="Write a comment..."></textarea>
      </div>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CommentSection;
