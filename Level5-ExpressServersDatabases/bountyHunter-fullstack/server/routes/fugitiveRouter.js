const express = require("express");
const fugitiveRouter = express.Router();
// const { v4: uuidv4 } = require("uuid");
const Fugitive = require("../models/fugitiveModel.js");

// Routes
// Get all
fugitiveRouter.get("/", async (req, res, next) => {
  try {
    const fugitives = await Fugitive.find();
    return res.status(200).send(fugitives);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// // Get One route
// fugitiveRouter.get("/:fugitiveId", (req, res, next) => {
//   const fugitiveId = req.params.fugitiveId;
//   const foundFugitive = fugitive.find(
//     (fugitive) => fugitive._id === fugitiveId
//   );
//   if (!foundFugitive) {
//     const error = new Error(`The Fugitive with id ${fugitiveId} was not found`);
//     res.status(500);
//     return next(error);
//   }
//   res.status(200).send(foundFugitive);
// });

// Get by alignment(genre)
fugitiveRouter.get("/search/aligned", async (req, res, next) => {
  console.log(req.query);

  try {
    const result = await Fugitive.find({ aligned: req.query.aligned });
    res.send(result);
  } catch (err) {
    res.send(500);
    return next(err);
  }
});

// Post one Request
fugitiveRouter.post("/", (req, res, next) => {
  const newFugitive = new Fugitive(req.body);
  newFugitive
    .save()
    .then((savedFugitive) => {
      return res.status(200).send(savedFugitive);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Delete One *async-waits until data comes back *await-goes with async
fugitiveRouter.delete("/:fugitiveId", async (req, res, next) => {
  try {
    const deletedFugitive = await Fugitive.findOneAndDelete({
      _id: req.params.fugitiveId,
    });
    if (!deletedFugitive) {
      res.status(404).send(`Fugitive ${req.params.fugitiveId} not found`);
    }
    res
      .status(200)
      .send(`Successfully deleted ${deletedFugitive.title} from DB`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update One
fugitiveRouter.put("/:fugitiveId", async (req, res, next) => {
  try {
    const updatedFugitive = await Fugitive.findOneAndUpdate(
      {
        _id: req.params.fugitiveId,
      },
      req.body,
      { new: true }
    );
    if (!updatedFugitive) {
      return res
        .status(404)
        .send(`Fugitive ${req.params.fugitiveId} does not exist`);
    }
    res.status(201).send(updatedFugitive);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = fugitiveRouter;
