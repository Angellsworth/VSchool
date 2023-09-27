const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/recipe.js");
`const { expressjwt } = require("express-jwt");
require("dotenv").config();`;

// Get All Recipes
recipeRouter.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.find().populate("user", "username");
    res.status(200).send(recipes);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get recipe by user id
recipeRouter.get("/:userId", async (req, res, next) => {
  try {
    const recipes = await Recipe.find({ user: req.auth._id }).populate(
      "user",
      "username"
    );
    res.status(200).send(recipes);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new Recipe
recipeRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id; //add user property to req body so we have the one to many relationship
  const newRecipe = new Recipe(req.body);
  newRecipe.save((err, savedRecipe) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedRecipe);
  });
});

// Delete Recipe
recipeRouter.delete("/:recipeId", (req, res, next) => {
  Recipe.findOneAndDelete(
    { _id: req.params.recipeId, user: req.auth._id }, //only user can delete their own issue's
    (err, deletedRecipe) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`Successfully deleted recipe`);
    }
  );
});

// Update/edit Recipe
recipeRouter.put("/:recipeId", async (req, res, next) => {
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      {
        _id: req.params.recipeId,
      },
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return res
        .status(404)
        .send(`Recipe ${req.params.recipeId} does not exist`);
    }
    res.status(201).send(updatedRecipe);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

recipeRouter.put("/vote/:recipeId", (req, res, next) => {
  Recipe.findByIdAndUpdate(
    { _id: req.params.recipeId },
    {
      $addToSet: {
        likes: req.auth._id,
      },
      $pull: {
        dislikes: req.auth._id,
      },
    },
    { new: true },
    (err, updatedRecipe) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedRecipe);
    }
  );
});

recipeRouter.put("/downVote/:recipeId", (req, res, next) => {
  Recipe.findByIdAndUpdate(
    { _id: req.params.recipeId },
    {
      $pull: {
        likes: req.auth._id,
      },
      $addToSet: {
        dislikes: req.auth._id,
      },
    },
    { new: true },
    (err, updatedRecipe) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedRecipe);
    }
  );
});

module.exports = recipeRouter;
