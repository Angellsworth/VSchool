const express = require("express");
const todoRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const todo = [
  {
    name: "Bathroom",
    description: "Scrub sink, toilet, tub and floor.",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4(),
  },
  {
    name: "Vaccuum",
    description: "Vaccuum all carpet. ",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4(),
  },
  {
    name: "Mop",
    description: "Mop all hard floors.",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4(),
  },
  {
    name: "Trash",
    description: "Empty and change liner of all garbages.",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4(),
  },
];

// Routes
// Get all
todoRouter.get("/", (req, res) => {
  console.log("get all");
  res.send(todo);
});

// Get One route
todoRouter.get("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const foundtodo = todo.find((todo) => todo._id === todoId);
  console.log(foundtodo);
  res.send(foundtodo);
});

// Get by name of todo
todoRouter.get("/search/name", (req, res) => {
  const name = req.query.name;
  console.log(name);
  const filteredtodo = todo.filter((todo) => todo.name === name);
  res.send(filteredtodo);
});

// Post one
todoRouter.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuidv4(); // manually add id to post request
  todo.push(req.body);
  res.send(`Successfully added ${newTodo.name} to the database`);
});

// Delete One
todoRouter.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todo.findIndex((todo) => todo._id === todoId);
  todo.splice(todoIndex, 1);
  res.send("Successfully deleted todo");
});

// Update One
todoRouter.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const updateObject = req.body;
  const todoIndex = todo.findIndex((todo) => todo._id === todoId);
  const updatedTodo = Object.assign(todo[todoIndex], updateObject);
  res.send(updatedTodo);
});

module.exports = todoRouter;
