//This route only contains things that belong only to authentication
const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// Signup post request
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (user) {
      res.status(403);
      return next(new Error("That username is already taken"));
    }
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      //create token       // payload,   // secret
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
      return res.status(201).send({ token, user: savedUser.withoutPassword() });
    });
  });
});

// Login
authRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (!user) {
      res.status(403);
      return next(new Error("Username or Password are incorrect"));
    }

    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.status(403);
        return next(new Error("Username or Password are incorrect"));
      }
      if (!isMatch) {
        res.status(403);
        return next(new Error("Username or Password are incorrect"));
      }
      //if everything matches we let them in
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      // console.log(req.auth);
      return res.status(200).send({ token, user: user.withoutPassword() });
    });
  });
});

module.exports = authRouter;
