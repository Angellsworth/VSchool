const express = require("express");
const fugitiveRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

// Fugitive Data
const fugitive = [
  {
    name: "Han Solo",
    living: true,
    reward: 200,
    aligned: "Jedi",
    _id: uuidv4(),
  },
  {
    name: "Jyn Erso",
    living: true,
    reward: 100,
    aligned: "Jedi",
    _id: uuidv4(),
  },
  {
    name: "General Grievous",
    living: true,
    reward: 300,
    aligned: "Sith",
    _id: uuidv4(),
  },
  {
    name: "Emperor Palpatine",
    living: true,
    reward: 1000,
    aligned: "Sith",
    _id: uuidv4(),
  },
];

// Routes
// Get all
fugitiveRouter.get("/", (req, res) => {
  console.log("1s");
  res.send(fugitive);
});

// Get One route
fugitiveRouter.get("/:fugitiveId", (req, res) => {
  const fugitiveId = req.params;
  const foundFugitive = fugitive.find(
    (fugitive) => fugitive._id === fugitiveId
  );
  res.send(foundFugitive);
});

// Get by alignment(genre)
fugitiveRouter.get("/search/aligned", (req, res) => {
  const aligned = req.query.aligned;
  console.log(aligned);
  const filteredFugitive = fugitive.filter(
    (fugitive) => fugitive.aligned === aligned
  );
  res.send(filteredFugitive);
});
// Post one
fugitiveRouter.post("/", (req, res) => {
  const newFugitive = req.body;
  newFugitive._id = uuidv4(); // manually add id to post request
  fugitive.push(req.body);
  res.send(`Successfully added ${newFugitive.title} to the database`);
});

// Delete One
fugitiveRouter.delete("/:fugitiveId", (req, res) => {
  const fugitiveId = req.params.fugitiveId;
  const fugitiveIndex = fugitive.findIndex(
    (fugitive) => fugitive._id === fugitiveId
  );
  fugitive.splice(fugitiveIndex, 1);
  res.send("Successfully deleted Fugitive");
});

// Update One
fugitiveRouter.put("/:fugitiveId", (req, res) => {
  const fugitiveId = req.params.fugitiveId;
  const updateObject = req.body;
  const fugitiveIndex = fugitive.findIndex(
    (fugitive) => fugitive._id === fugitiveId
  );
  const updatedFugitive = Object.assign(fugitive[fugitiveIndex], updateObject);
  res.send(updatedFugitive);
});

module.exports = fugitiveRouter;
