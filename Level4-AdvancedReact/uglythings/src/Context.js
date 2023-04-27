import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const [uglyArray, setUglyArray] = useState([]);

  //put api requests in context so everyone can use them
  //[x] get request
  function getThings() {
    axios
      .get("https://api.vschool.io/angelaellsworth/thing")
      .then((res) => setUglyArray(res.data))
      .catch((err) => console.log(err));
  }
  //[x] post request

  function postThings(thing) {
    console.log(thing);
    axios
      .post("https://api.vschool.io/angelaellsworth/thing", thing)
      .then((res) => getThings())
      .catch((err) => console.log(err));
  }
  //[x] delete request
  function deleteThings(id) {
    console.log(id);
    axios
      .delete(`https://api.vschool.io/angelaellsworth/thing/${id}`)
      .then((res) => {
        getThings();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  //[x] edit request
  function editThings(edits, id) {
    console.log(id);
    console.log(edits);
    axios
      .put(`https://api.vschool.io/angelaellsworth/thing/${id}`, edits)
      .then((res) =>
        setUglyArray((prevUglyArray) => {
          return prevUglyArray.map((thing) => {
            return thing._id === id ? res.data : thing;
          });
        })
      )
      .catch((err) => console.log(err));
  }

  return (
    <Context.Provider
      value={{
        uglyArray,
        setUglyArray,
        getThings,
        postThings,
        deleteThings,
        editThings,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
