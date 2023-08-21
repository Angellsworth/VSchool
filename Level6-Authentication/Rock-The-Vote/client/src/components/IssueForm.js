import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function IssueForm(props) {
  const initInputs = {
    title: props.title || "",
    description: props.description || "",
    imgUrl: props.img || "",
  };
  const { _id } = props;
  const { getUserIssues, editIssue } = useContext(UserContext);
  const [inputs, setInputs] = useState(initInputs);
  // const { addIssue } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.submit(inputs, props._id);
  //   setInputs(initInputs);
  //   getUserIssues();
  // }

  function editSubmit(e) {
    console.log(`inside editSubmit func`);
    // e.preventDefault();
    editIssue(inputs, _id);
    setInputs(initInputs);
    getUserIssues();
  }
  const { title, description, imgUrl } = inputs;
  return (
    <form onSubmit={editSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Issue"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description of issue"
      />
      <input
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="Image Url"
      />
      <button>{props.btnText}</button>
    </form>
  );
}
