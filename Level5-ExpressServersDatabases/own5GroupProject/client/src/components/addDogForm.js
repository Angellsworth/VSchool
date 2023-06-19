import React, { useState } from "react";

export default function AddDogForm(props) {
  const initInputs = {
    name: props.name || "",
    breed: props.breed || "",
    age: props.age || "",
    walkDay: props.walkDay || "",
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
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
          type="text"
          name="breed"
          value={inputs.breed}
          onChange={handleChange}
          placeholder="Breed"
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
          name="walkDay"
          value={inputs.walkDay}
          onChange={handleChange}
          placeholder="Walk Day"
        />
        <button>{props.btnText}</button>
      </form>
    </>
  );
}
