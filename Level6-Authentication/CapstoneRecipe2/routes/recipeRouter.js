const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/recipe.js");
const User = require("../models/user.js");
const { expressjwt } = require("express-jwt");
require("dotenv").config();

// //Get All Recipes
recipeRouter.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.find().populate("user");
    res.status(200).send(recipes);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//Get Recipes by User id
recipeRouter.get("/user", (req, res, next) => {
  Recipe.find({ user: req.auth._id }, (err, recipes) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(recipes);
  });
});

// Add/Post new Recipe
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

//***Save a Recipe savedRecipe? or savedRecipes?
recipeRouter.put("/", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.body.recipeId);
    const user = await User.findById(req.body.userId);
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ recipe });
  } catch (err) {
    res.json(err);
  }
});

//***get all recipes that a user has saved
recipeRouter.get("/savedRecipes/user", async (req, res) => {
  try {
    const User = await User.findById(req.body.userId);
    res.json({ savedRecipes: User?.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

//***get all saved recipes no Ids
recipeRouter.get("/savedRecipes", async (req, res) => {
  try {
    const User = await User.findById(req.body.userId);
    const savedRecipes = await Recipe.find({
      _id: { $in: User.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

// // //Delete Recipe
recipeRouter.delete("/:recipeId", (req, res, next) => {
  Recipe.findByIdAndDelete(
    { _id: req.params.recipeId, user: req.auth._id },
    (err, deletedRecipe) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully deleted Recipe: ${deletedRecipe.title}`);
    }
  );
});

// // //Update/edit Recipe
recipeRouter.put("/:recipeId", (req, res, next) => {
  Recipe.findByIdAndUpdate(
    { _id: req.params.recipeId, user: req.auth._id },
    req.body,
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
