const express = require("express");
const movieRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

// everything that is added to a database needs to have an id until we have a database it's up to us to create
const movies = [
  { title: "die hard", genre: "action", _id: uuidv4() },
  { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
  { title: "lion king", genre: "fantasy", _id: uuidv4() },
  { title: "friday the 13th", genre: "horror", _id: uuidv4() },
];

// Routes
// #first way to write route

// movieRouter.get("/", (req, res) => {
//   res.send(movies);
// });

// movieRouter.post("/movies", (req, res) => {
//   const newMovie = req.body;
//   newMovie._id = uuidv4();
//   movies.push(newMovie);
//   res.send(`Successfully added ${newMovie.title} to the database`);
// });

// #second way to write routes
movieRouter
  .route("/")
  .get((req, res) => {
    res.send(movies);
  })
  .post((req, res) => {
    const newMovie = req.body;
    newMovie._id = uuidv4();
    movies.push(newMovie);
    res.send(`Successfully added ${newMovie.title} to the database`);
  });

module.exports = movieRouter;
