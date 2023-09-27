const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue.js");
`const { expressjwt } = require("express-jwt");
require("dotenv").config();`;

// Get All Todos
issueRouter.get("/", async (req, res, next) => {
  try {
    const issues = await Issue.find().populate("user", "username");
    res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get issues by user id
issueRouter.get("/:userId", async (req, res, next) => {
  try {
    const issues = await Issue.find({ user: req.auth._id }).populate(
      "user",
      "username"
    );
    res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id; //add user property to req body so we have the one to many relationship
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });
});

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id }, //only user can delete their own issue's
    (err, deletedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`Successfully deleted issue`);
    }
  );
});

// Update/edit Issue
issueRouter.put("/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate(
      {
        _id: req.params.issueId,
      },
      req.body,
      { new: true }
    );
    if (!updatedIssue) {
      return res.status(404).send(`Issue ${req.params.issueId} does not exist`);
    }
    res.status(201).send(updatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

issueRouter.put("/vote/:issueId", (req, res, next) => {
  Issue.findByIdAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: {
        likes: req.auth._id,
      },
      $pull: {
        dislikes: req.auth._id,
      },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

issueRouter.put("/downVote/:issueId", (req, res, next) => {
  Issue.findByIdAndUpdate(
    { _id: req.params.issueId },
    {
      $pull: {
        likes: req.auth._id,
      },
      $addToSet: {
        dislikes: req.auth._id,
      },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

module.exports = issueRouter;
