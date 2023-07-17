const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todo.js");
const { expressjwt } = require("express-jwt");
require("dotenv").config();

// Get All Todos
todoRouter.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.find().populate("user", "username");
    res.status(200).send(todos);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// // Get todos by user id
// todoRouter.get(
//   "/user/:id",
//   expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
//   (req, res, next) => {
//     Todo.find({ user: req.auth._id }, (err, todos) => {
//       if (err) {
//         res.status(500);
//         return next(err);
//       }
//       return res.status(200).send(todos);
//     });
//   }
// );

// Get todos by user id
todoRouter.get(
  "/user/:id",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  async (req, res, next) => {
    try {
      const todos = await Todo.find({ user: req.auth._id }).populate(
        "user",
        "username"
      );
      res.status(200).send(todos);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  }
);

// Add new Todo
todoRouter.post(
  "/",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res, next) => {
    req.body.user = req.auth._id; //add user property to req body so we have the one to many relationship
    const newTodo = new Todo(req.body);
    newTodo.save((err, savedTodo) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedTodo);
    });
  }
);

// Delete Todo
todoRouter.delete(
  "/:todoId",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res, next) => {
    Todo.findOneAndDelete(
      { _id: req.params.todoId, user: req.auth._id }, //only user can delete their own todo's
      (err, deletedTodo) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(`Successfully delete todo: ${deletedTodo.title}`);
      }
    );
  }
);

// Update/edit Todo
todoRouter.put(
  "/:todoId",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res, next) => {
    Todo.findOneAndUpdate(
      { _id: req.params.todoId, user: req.auth._id },
      req.body,
      { new: true },
      (err, updatedTodo) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(201).send(updatedTodo);
      }
    );
  }
);

module.exports = todoRouter;
