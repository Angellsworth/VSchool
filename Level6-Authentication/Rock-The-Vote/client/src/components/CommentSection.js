import React from "react"; //{ useState, useEffect }
// import CommentForm from "./CommentForm";

const CommentSection = ({ comments }) => {
  // console.log(comments);
  return (
    <div className="commentContainer">
      {/* <CommentForm /> */}

      <div className="postedComments">
        {comments.map((comment) => (
          <p className="individualComment">{comment.commentText}</p>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
