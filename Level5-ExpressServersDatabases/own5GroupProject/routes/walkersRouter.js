const express = require("express");
const walkersRouter = express.Router();
const Walker = require("../models/walkermodel.js");

//Routes
//**Get All */
walkersRouter.get("/", async (req, res, next) => {
  try {
    const walkers = await Walker.find();
    return res.status(200).send(walkers);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//**Post One */
walkersRouter.post("/", (req, res, next) => {
  const newWalker = new Walker(req.body);
  newWalker
    .save()
    .then((savedWalker) => {
      return res.status(200).send(savedWalker);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

//**Update One */
walkersRouter.put("/:walkersId", async (req, res, next) => {
  try {
    const updatedWalker = await Walker.findOneAndUpdate(
      {
        _id: req.params.walkersId, //find this one
      },
      req.body, //update with this data
      { new: true } //send updated version SUCCESS
    );
    if (!updatedWalker) {
      return res
        .status(404) //doesn't exist
        .send(`Walker ${req.params.walkersId} does not exist`);
    }
    res.status(201).send(updatedWalker);
  } catch (err) {
    res.status(500); //unsuccessful
    return next(err);
  }
});

//**Delete One */
walkersRouter.delete("/:walkersId", async (req, res, next) => {
  try {
    const deletedWalker = await Walker.findOneAndDelete({
      _id: req.params.walkersId,
    });
    if (!deletedWalker) {
      res.status(404).send(`Walker ${req.params.walkersId} not found`);
    }
    res.status(200).send(`Successfully deleted ${deletedWalker.name} from DB`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = walkersRouter;

// status codes
// 200 successful request
// 201 successful insert or update
// 401 unauthorized
// 404 Not found
// 500 Server Error
