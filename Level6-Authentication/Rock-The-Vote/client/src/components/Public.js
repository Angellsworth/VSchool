import React, { useContext, useEffect } from "react";
import TodoList from "./TodoList.js";
import Todo from "./Todo.js";
import { UserContext } from "../context/UserProvider.js";

export default function Public() {
  const {
    user: { username },
    getAllTodos,
    allTodos,
  } = useContext(UserContext);
  useEffect(() => {
    getAllTodos();
  }, []);
  console.log(allTodos);
  return <div className="public"></div>;
}
