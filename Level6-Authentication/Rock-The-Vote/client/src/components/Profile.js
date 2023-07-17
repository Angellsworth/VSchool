import React, { useContext } from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import Todo from "./Todo.js";
import { UserContext } from "../context/UserProvider.js";

export default function Profile() {
  const {
    user: { username },
    addTodo,
    todos,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Post a new Todo</h3>
      <br />
      <TodoForm addTodo={addTodo} />
      <br />
      <h3>Posted Todos</h3>
      <TodoList todos={todos} />
    </div>
  );
}
