import React, { useState } from "react";
import AddDogForm from "./addDogForm";

const Dogs = (props) => {
  const { name, breed, age, walkDay, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="dog">
      {!editToggle ? (
        <>
          <h1>Name: {name}</h1>
          <p>Breed: {breed}</p>
          <p>Age: {age}</p>
          <p>Preferred Walk Day: {walkDay}</p>
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
          <AddDogForm
            name={name}
            breed={breed}
            age={age}
            walkDay={walkDay}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editDog}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Dogs;
