import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Fugitive from "./components/fugitive";
import AddFugitiveForm from "./components/AddFugitiveForm";

export default function App() {
  const [fugitives, setFugitives] = useState([]);

  // Request Types

  // Get Request
  function getFugitives() {
    axios
      .get("/fugitive")
      .then((res) => setFugitives(res.data))
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // Post Request
  function addFugitive(newFugitive) {
    axios
      .post("/fugitive", newFugitive)
      .then((res) => {
        setFugitives((prevFugitive) => [...prevFugitive, res.data]);
      })
      .catch((err) => console.log(err));
  }

  // Delete Request
  function deleteFugitive(fugitiveId) {
    axios
      .delete(`/fugitive/${fugitiveId}`)
      .then((res) => {
        setFugitives((prevFugitive) =>
          prevFugitive.filter((fugitive) => fugitive._id !== fugitiveId)
        );
      })
      .catch((err) => console.log(err));
  }

  // Put Request
  function editFugitive(updates, fugitiveId) {
    axios
      .put(`/fugitive/${fugitiveId}`, updates)
      .then((res) => {
        console.log(res.data);
        setFugitives((prevFugitive) =>
          prevFugitive.map((fugitive) =>
            fugitive._id !== fugitiveId ? fugitive : res.data
          )
        );
      })
      .catch((err) => console.log(err));
  }

  function handleFilter(e) {
    if (e.target.value === "reset") {
      getFugitives();
    } else {
      axios
        .get(`/fugitive/search/aligned?aligned=${e.target.value}`)
        .then((res) => setFugitives(res.data))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getFugitives();
  }, []);
  console.log(fugitives);

  return (
    <>
      <header>
        <h1>Bounty Hunter DataBase</h1>
        <h3>Earn that Bounty!</h3>
      </header>

      <div className="fugitiveContainer">
        <AddFugitiveForm submit={addFugitive} btnText="Add Fugitive" />

        <h4>Filter by Alignment</h4>
        <select onChange={handleFilter} className="filter-form">
          <option value="reset">- All Fugitives -</option>
          <option value="Jedi">Jedi</option>
          <option value="Sith">Sith</option>
        </select>

        {fugitives.map((fugitive) => (
          <Fugitive
            {...fugitive}
            key={fugitive.name}
            deleteFugitive={deleteFugitive}
            editFugitive={editFugitive}
          />
        ))}
      </div>
    </>
  );
}
