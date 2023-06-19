import React, { useState } from "react";

export default function AddWalkerForm(props) {
  const initInputs = {
    name: props.name || "",
    age: props.age || "",
    reviews: props.reviews || "",
  };

  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    props.addWalker(inputs, props._id);
    setInputs(initInputs);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={inputs.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="reviews"
          value={inputs.reviews}
          onChange={handleChange}
          placeholder="Reviews"
        />
        <button>{props.btnText}</button>
      </form>
    </>
  );
}
