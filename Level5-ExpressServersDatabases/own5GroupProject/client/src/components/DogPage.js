import React, { useState, useEffect } from "react";
import axios from "axios";
import Dogs from "./Dogs";
import AddDogForm from "./addDogForm";

function DogPage() {
  const [dogs, setDogs] = useState([]);
  //can implement error message in state

  // Get All Request
  function getDogs() {
    axios
      .get("/dogs")
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err.response.data.errMsg)); //hooks to error handler on server.js
  }

  // Post One Request
  function addDog(newDog) {
    axios
      .post("/dogs", newDog)
      .then((res) => {
        setDogs((prevDog) => [...prevDog, res.data]);
      })
      .catch((err) => console.log(err));
  }

  //Delete One Request
  function deleteDog(dogId) {
    axios
      .delete(`/dogs/${dogId}`)
      .then((res) => {
        setDogs((prevDog) => prevDog.filter((dog) => dog._id !== dogId)); //update frontend
      })
      .catch((err) => console.log(err));
  }
  //Edit Dogs
  function editDog(updatedDog, dogId) {
    axios
      .put(`/dogs/${dogId}`, updatedDog)
      .then((res) => {
        setDogs((prevDog) =>
          prevDog.map((dog) => (dog._id !== dogId ? dog : res.data))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleFilter(e) {
    if (e.target.value === "reset") {
      getDogs();
    } else {
      axios
        .get(`/dogs/search/walkDay?walkDay=${e.target.value}`)
        .then((res) => setDogs(res.data))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getDogs();
  }, []);
  console.log(dogs);

  return (
    <div className="App">
      <nav></nav>
      <div className="dog-container">
        <AddDogForm submit={addDog} btnText="Add Dog" />

        <h4>Filter by walk day</h4>
        <select onChange={handleFilter} className="filter-form">
          <option value="reset">- All Days -</option>
          <option value="Monday">- Monday -</option>
          <option value="Tuesday">- Tuesday -</option>
          <option value="Wednesday">- Wednesday -</option>
          <option value="Thursday">- Thursday -</option>
          <option value="Friday">- Friday -</option>
          <option value="Saturday">- Saturday -</option>
          <option value="Sunday">- Sunday -</option>
        </select>

        {dogs.map((dog) => (
          <Dogs
            {...dog}
            key={dog.name}
            deleteDog={deleteDog}
            editDog={editDog}
          />
        ))}
      </div>
    </div>
  );
}

export default DogPage;
