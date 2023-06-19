import React, { useState } from "react";

export default function AddInventForm(props) {
  const initInputs = { item: props.item || "", type: props.type || "" }; // reusable , price: props.price || ""
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id); //for edits you need inputs and id
    setInputs(initInputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        value={inputs.item}
        onChange={handleChange}
        placeholder="item"
      />

      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="type"
      />
      {/* <input
        type="number"
        name="price"
        value={inputs.price}
        onChange={handleChange}
        placeholder="price"
      /> */}

      <button className="edit-btn">{props.btnText}</button>
    </form>
  );
}
