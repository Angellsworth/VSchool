const express = require("express");
const commentRouter = express.Router();
const { expressjwt } = require("express-jwt");
const Comment = require("../models/comment.js");

//Add new comment
commentRouter.post("/:issueId", (req, res, next) => {
  req.body.user = req.auth._id;
  req.body.issueID = req.params.issueId;
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

// // Delete comment
// commentRouter.delete("/:commentId", async (req, res, next) => {
//   try {
//     const commentId = req.params.commentId;
//     const deletedComment = await Comment.findByIdAndDelete(commentId);

//     if (!deletedComment) {
//       return res.status(404).json({ message: "Comment not found." });
//     }

//     res.status(200).json({ message: "Comment deleted successfully." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while deleting the comment." });
//   }
// });

// // Update/edit a comment
// commentRouter.put("/:commentId", async (req, res, next) => {
//   try {
//     const commentId = req.params.commentId;
//     const updatedComment = await Comment.findByIdAndUpdate(
//       commentId,
//       { $set: req.body },
//       { new: true }
//     );

//     if (!updatedComment) {
//       return res.status(404).json({ message: "Comment not found." });
//     }

//     res.status(200).json(updatedComment);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while updating the comment." });
//   }
// });

module.exports = commentRouter;
