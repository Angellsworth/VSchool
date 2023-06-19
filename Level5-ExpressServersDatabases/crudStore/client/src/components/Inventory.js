import React, { useState } from "react";
import AddInventForm from "./AddInventForm";

export default function Inventory(props) {
  const { item, type, _id } = props;
  const [editToggle, setEditToggle] = useState(false); //view either inventory data or form for editing

  console.log(props);
  return (
    <div className="inventory">
      {!editToggle ? (
        <>
          <h1>Item: {item} </h1>
          <p>Type: {type} </p>
          <button
            className="delete-btn"
            onClick={() => props.deleteInventory(_id)}
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
          <AddInventForm
            item={item}
            type={type}
            _id={_id} // id for specific movie
            btnText="Submit Edit"
            submit={props.editInventory} // needs to equal the edit function in the app.js
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
// price <p>Price: {price}</p>
