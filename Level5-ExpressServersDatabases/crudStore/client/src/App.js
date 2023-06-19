import React, { useState, useEffect } from "react";
import axios from "axios";
import Inventory from "./components/Inventory";
import AddInventForm from "./components/AddInventForm";

export default function App() {
  const [inventory, setInventory] = useState([]);

  function getInventory() {
    axios
      .get("/inventory")
      .then((res) => setInventory(res.data))
      .catch((err) => console.log(err.response.data.errMsg)); //error handler response
  }

  function addInventory(newInventory) {
    axios
      .post("/inventory", newInventory)
      .then((res) =>
        setInventory((prevInventory) => [...prevInventory, res.data])
      )
      .catch((err) => console.log(err));
  }

  function deleteInventory(inventoryId) {
    axios
      .delete(`/inventory/${inventoryId}`)
      .then((res) => {
        setInventory((prevInventory) =>
          prevInventory.filter((inventory) => inventory._id !== inventoryId)
        );
      })
      .catch((err) => console.log(err));
  }
  function editInventory(updates, inventoryId) {
    axios
      .put(`/inventory/${inventoryId}`, updates)
      .then((res) => {
        setInventory((prevInventory) =>
          prevInventory.map(
            (inventory) =>
              inventory._id !== inventoryId ? inventory : res.data //updating edited state
          )
        );
      })
      .catch((err) => console.log(err));
  }

  function handleFilter(e) {
    if (e.target.value === "reset") {
      getInventory();
    } else {
      axios
        .get(`/inventory/search/type?type=${e.target.value}`)
        .then((res) => setInventory(res.data))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div className="inventoryContainer">
      <AddInventForm
        submit={addInventory}
        btnText="Add New Item" //reusable
      />
      <h4>Filter by item type</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">-Select a type-</option>
        <option value="clothing">clothing</option>
        <option value="toy">toy</option>
      </select>

      {inventory.map((inventory) => (
        <Inventory
          {...inventory}
          key={inventory.item}
          deleteInventory={deleteInventory}
          editInventory={editInventory} //passed down from edit function as a prop
        />
      ))}
    </div>
  );
}
