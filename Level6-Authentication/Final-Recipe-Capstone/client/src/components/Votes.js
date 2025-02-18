import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";

function Votes({ userLikes, userDislikes, _id }) {
  const { likes, dislikes, userState } = useContext(UserContext);
  const [liked, setLiked] = useState();
  const [disliked, setDisliked] = useState();

  return (
    <div className="rating">
      <p>Total likes: {userLikes.length}</p>

      <button className="voteBtn like" onClick={() => likes(_id)}>
        <div>
          <i className="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
        </div>
        Like
      </button>
      {/* <p>Total Votes: {userLikes.length}</p> */}
      <button className="voteBtn dislike" onClick={() => dislikes(_id)}>
        <div>
          <i className="fa fa-thumbs-down fa-3x like" aria-hidden="true"></i>
        </div>
        Dislike
      </button>
    </div>
  );
}

export default Votes;
