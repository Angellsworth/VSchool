import React, { useState, useContext } from "react";
import IssueForm from "./IssueForm";
import Votes from "./Votes";
import CommentSection from "./CommentSection";
import { UserContext } from "../context/UserProvider";
import CommentForm from "./CommentForm";

export default function Issue(props) {
  // console.log("inside issue comp", props);
  const {
    title,
    description,
    imgUrl,
    _id,
    deletedIssue,
    editIssue,
    likes,
    dislikes,
  } = props;
  const { allComments } = useContext(UserContext);
  const [editToggle, setEditToggle] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);

  const filteredComments = allComments.filter(
    (comment) => comment.issueID === _id
  );

  const commentList = filteredComments.map((comments) => {
    return <CommentSection comments={filteredComments} />;
  });

  return (
    <div className="issueContainer">
      {!editToggle ? (
        <>
          <h1 className="issueTitle">{title}</h1>
          <img
            src={imgUrl}
            alt="issue pic"
            className="issueImage"
            width={350}
          />
          <p className="issueDescription">{description}</p>

          <button className="delete-btn" onClick={() => deletedIssue(_id)}>
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <IssueForm
            title={title}
            description={description}
            img={imgUrl}
            _id={_id}
            btnText="Submit Editted Issue"
            submit={editIssue}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}

      <br></br>

      <div className="rating">
        <Votes userLikes={likes} userDislikes={dislikes} _id={_id} />
      </div>

      <CommentForm _id={_id} />
      <button
        onClick={() => setCommentToggle(!commentToggle)}
        className="commentBtn"
      >
        View All Comments
      </button>
      {commentToggle && <CommentSection comments={filteredComments} />}
    </div>
  );
}
