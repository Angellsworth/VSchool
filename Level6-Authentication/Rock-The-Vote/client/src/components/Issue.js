import React, { useState } from "react";
import IssueForm from "./IssueForm";
import Votes from "./Votes";
import CommentSection from "./CommentSection";

export default function Issue(props) {
  console.log("inside issue comp", props);
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
  const [editToggle, setEditToggle] = useState(false);
  console.log(likes);
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
            editIssue={editIssue}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}

      <br></br>

      <div class="rating">
        <Votes userLikes={likes} userDislikes={dislikes} _id={_id} />
      </div>
      <CommentSection />
    </div>
  );
}
