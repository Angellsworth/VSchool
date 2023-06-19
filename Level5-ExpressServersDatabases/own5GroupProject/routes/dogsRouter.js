const express = require("express");
const dogsRouter = express.Router();
const Dog = require("../models/dogmodel.js");

//Routes
//**Get All */
dogsRouter.get("/", async (req, res, next) => {
  try {
    const dogs = await Dog.find();
    return res.status(200).send(dogs);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//**Get by walkDay */
dogsRouter.get("/search/walkDay", async (req, res, next) => {
  console.log(req.query);
  try {
    const result = await Dog.find({ walkDay: req.query.walkDay });
    res.send(result);
  } catch (err) {
    res.send(500);
    return next(err);
  }
});

//**Post One */
dogsRouter.post("/", (req, res, next) => {
  const newDog = new Dog(req.body);
  newDog
    .save()
    .then((savedDog) => {
      return res.status(200).send(savedDog);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

//**Update One */
dogsRouter.put("/:dogsId", async (req, res, next) => {
  try {
    const updatedDog = await Dog.findOneAndUpdate(
      {
        _id: req.params.dogsId,
      },
      req.body,
      { new: true }
    );
    if (!updatedDog) {
      return res
        .status(404)
        .send(`Fugitive ${req.params.dogsId} does not exist`);
    }
    res.status(201).send(updatedDog);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//**Delete One */
dogsRouter.delete("/:dogsId", async (req, res, next) => {
  try {
    const deletedDog = await Dog.findOneAndDelete({
      _id: req.params.dogsId,
    });
    if (!deletedDog) {
      res.status(404).send(`Dog ${req.params.dogsId} not found`);
    }
    res.status(200).send(`Successfully deleted ${deletedDog.title} from DB`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = dogsRouter;

// status codes
// 200 successful request
// 201 successful insert or update
// 401 unauthorized
// 404 Not found
// 500 Server Error
