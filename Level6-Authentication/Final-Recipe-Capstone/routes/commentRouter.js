const express = require("express");
const commentRouter = express.Router();
const { expressjwt } = require("express-jwt");
const Comment = require("../models/comment.js");

//Add new comment
commentRouter.post("/:recipeId", (req, res, next) => {
  req.body.user = req.auth._id;
  req.body.recipeID = req.params.recipeId;
  const comment = new Comment(req.body);
  comment.save(function (err, newComment) {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(newComment);
  });
});

// // Get all comments
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    console.log("inside commentrouter", comments);
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comments);
  });
});

module.exports = commentRouter;
