import React, { useState, useEffect } from "react";
import axios from "axios";
import Walkers from "./Walkers";
import AddWalkerForm from "./addWalkerForm.js";

function WalkerPage() {
  const [walkers, setWalkers] = useState([]);
  //can implement error message in state

  // Get All Request
  function getWalkers() {
    axios
      .get("/walkers")
      .then((res) => setWalkers(res.data))
      .catch((err) => console.log(err.response.data.errMsg)); //hooks to error handler on server.js
  }

  // Post One Request
  function addWalker(newWalker) {
    axios
      .post("/walkers", newWalker)
      .then((res) => {
        setWalkers((prevWalker) => [...prevWalker, res.data]);
      })
      .catch((err) => console.log(err));
  }

  //Delete One Request
  function deleteWalker(walkerId) {
    axios
      .delete(`/walkers/${walkerId}`)
      .then((res) => {
        setWalkers((prevWalker) =>
          prevWalker.filter((walker) => walker._id !== walkerId)
        ); //update frontend
      })
      .catch((err) => console.log(err));
  }
  //Edit Dogs
  function editWalker(updatedWalker, walkerId) {
    axios
      .put(`/walkerss/${walkerId}`, updatedWalker)
      .then((res) => {
        setWalkers((prevWalker) =>
          prevWalker.map((walker) =>
            walker._id !== walkerId ? walker : res.data
          )
        );
      })
      .catch((err) => console.log(err));
  }

  // function handleFilter(e) {
  //   if (e.target.value === "reset") {
  //     getWalkers();
  //   } else {
  //     axios
  //       .get(`/walkers/search/walkDay?walkDay=${e.target.value}`)
  //       .then((res) => setWalkers(res.data))
  //       .catch((err) => console.log(err));
  //   }
  // }

  useEffect(() => {
    getWalkers();
  }, []);
  console.log(walkers);

  return (
    <div className="">
      <nav></nav>
      <div className="walker-container">
        <AddWalkerForm submit={addWalker} btnText="Add Walker" />

        {/* <h4>Filter by walk day</h4>
        <select onChange={handleFilter} className="filter-form">
          <option value="reset">- All Days -</option>
          <option value="Monday">- Monday -</option>
          <option value="Tuesday">- Tuesday -</option>
          <option value="Wednesday">- Wednesday -</option>
          <option value="Thursday">- Thursday -</option>
          <option value="Friday">- Friday -</option>
          <option value="Saturday">- Saturday -</option>
          <option value="Sunday">- Sunday -</option>
        </select> */}

        {walkers.map((walker) => (
          <Walkers
            {...walker}
            key={walker.name}
            deleteWalker={deleteWalker}
            editWalker={editWalker}
          />
        ))}
      </div>
    </div>
  );
}

export default WalkerPage;
