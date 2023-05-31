import React, { useState } from "react";

export default function AddFugitiveForm(props) {
  const initInputs = {
    name: props.name || "",
    reward: props.reward || "",
    aligned: props.aligned || "",
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(initInputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="Name"
      />

      {/* <input
        type="text"
        name="living"
        value={inputs.living}
        onChange={handleChange}
        placeholder="Living"
      /> */}

      <input
        type="text"
        name="reward"
        value={inputs.reward}
        onChange={handleChange}
        placeholder="Reward"
      />

      <input
        type="text"
        name="aligned"
        value={inputs.aligned}
        onChange={handleChange}
        placeholder="Alignment"
      />
      <button>{props.btnText}</button>
    </form>
  );
}
