import React, { useState } from "react";
import AddFugitiveForm from "./AddFugitiveForm";

export default function Fugitive(props) {
  const { name, living, reward, aligned, _id } = props;
  console.log(props);
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div className="fugitive">
      {!editToggle ? (
        <>
          <h2>Name: {name}</h2>
          {/* <p>Living: {living}</p> */}
          <p>Reward: {reward}</p>
          <p>Alignment: {aligned}</p>

          <button
            className="delete-btn"
            onClick={() => props.deleteFugitive(_id)}
          >
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
          <AddFugitiveForm
            name={name}
            // living={living}
            reward={reward}
            aligned={aligned}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editFugitive}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
