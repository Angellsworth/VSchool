const express = require("express");
const commentRouter = express.Router();
const { expressjwt } = require("express-jwt");
const Comment = require("../models/comment.js");
const mongoose = require("mongoose");

// Add/Post new comment
commentRouter.post("/:issueId", async (req, res, next) => {
  try {
    req.body.user = req.auth._id;
    req.body.issue = req.params.issueId;
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();

    res.status(201).json(savedComment); // Respond with the saved comment
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while saving the comment." });
  }
});

// Get all comments
commentRouter.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find();

    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching comments." });
  }
});

// Get comments by issue ID
commentRouter.get("/issue/:issueId", async (req, res, next) => {
  try {
    const issueId = req.params.issueId;

    // Assuming Comment model has an 'issueId' field
    const comments = await Comment.find({ issueId });

    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching comments." });
    // You might also want to call `next(error)` to pass the error to the next middleware
  }
});

//Delete comment
commentRouter.delete("/:commentId", async (req, res, next) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the comment." });
  }
});

// Update/edit a comment
commentRouter.put("/:commentId", async (req, res, next) => {
  try {
    const commentId = req.params.commentId;
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { $set: req.body },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the comment." });
  }
});

module.exports = commentRouter;
