const express = require("express");
const tvshowRouter = express.Router();

const tvShows = [
  { title: "Rick and Morty", _id: uuidv4() },
  { title: "Watchmen", _id: uuidv4() },
  { title: "Westworld", _id: uuidv4() },
  { title: "Friends", _id: uuidv4() },
];

tvshowRouter.get("/", (req, res) => {
  res.send(tvShows);
});

tvshowRouter.post("/tvshows", (req, res) => {
  const newShow = req.body;
  newShow._id = uuidv4();
  tvShows.push(newShow);
  res.send(`Successfully added ${newShow.title} to the database`);
});

module.exports = tvshowRouter;
