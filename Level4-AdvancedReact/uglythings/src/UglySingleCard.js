import React, { useState, useContext } from "react";
import { Context } from "./Context";
import axios from "axios";

function UglySingleCard({ card }) {
  console.log(card);
  const { deleteThings, editThings } = useContext(Context);
  const [edit, setEdit] = useState(true);
  const [theEditThing, setTheEditThing] = useState({
    title: card.title,
    description: card.description,
    imgUrl: card.imgUrl,
  });

  function handleEditChange(e) {
    const { name, value } = e.target;
    setTheEditThing((prevTheEditThing) => {
      return {
        ...prevTheEditThing,
        [name]: value,
      };
    });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    setEdit(!edit);
    editThings(theEditThing, card._id);
  }

  function toggleEdit() {
    setEdit(!edit);
  }
  console.log(theEditThing);
  return (
    <div className="ugly-card">
      {edit ? (
        <>
          <h3>{card.title}</h3>

          <img src={card.imgUrl} className="imagePlacement"></img>

          <div className="descriptionPlacement">
            <p>{card.description}</p>
          </div>

          <button className="editButton" onClick={toggleEdit}>
            Edit
          </button>

          {/* delete grabs from context */}
          <button
            className="deleteButton"
            onClick={() => deleteThings(card._id)}
          >
            Delete
          </button>
        </>
      ) : (
        <>
          <input
            className="editToggleInput"
            value={theEditThing.title}
            name="title"
            onChange={handleEditChange}
          />
          <input
            className="editToggleInput"
            value={theEditThing.description}
            name="description"
            onChange={handleEditChange}
          />
          <input
            className="editToggleInput"
            value={theEditThing.imgUrl}
            name="imgUrl"
            onChange={handleEditChange}
          />
          <button className="saveButton" onClick={handleEditSubmit}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default UglySingleCard;
