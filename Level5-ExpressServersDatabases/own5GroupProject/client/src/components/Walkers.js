import React, { useState } from "react";
import AddWalkerForm from "./addWalkerForm";

const Walkers = (props) => {
  const { name, age, rating, _id } = props;
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div className="dog">
      {!editToggle ? (
        <>
          <h1>Name: {name}</h1>
          <p>Age: {age}</p>
          <p>Rating: {rating}</p>
          <button className="delete-btn" onClick={() => props.deleteDog(_id)}>
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
          <AddWalkerForm
            name={name}
            age={age}
            rating={rating}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editWalker}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Walkers;
