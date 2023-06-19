const express = require("express");
const inventoryRouter = express.Router();
// const { v4: uuidv4 } = require("uuid"); // correct import for 2023->Mongo creates ID's
const Inventory = require("../models/inventory.js"); //bringing in Schema

//Get ALL Request**Mongo**
inventoryRouter.get("/", async (req, res, next) => {
  try {
    const inventory = await Inventory.find();
    return res.status(200).send(inventory);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//Get One Request**Mongo***
// inventoryRouter.get("/:inventoryId", (req, res, next) => {
//   const inventoryId = req.params.inventoryId;
//   const foundInventory = inventory.find(
//     (inventory) => inventory._id === inventoryId
//   );
//   if (!foundInventory) {
//     const error = new Error(`The item with id ${inventoryId} does not exist.`); //if statement passes to error handler in server.js
//     res.status(500);
//     return next(error);
//   }
//   res.status(200).send(foundInventory);
// });

//Get by type **mongoose**
inventoryRouter.get("/search/type", async (req, res, next) => {
  console.log(req.query);
  try {
    const result = await Inventory.find({ type: req.query.type });
    res.send(result);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Post One Request
inventoryRouter.post("/", (req, res, next) => {
  const newInventory = new Inventory(req.body);
  newInventory
    .save()
    .then((savedInventory) => {
      return res.status(200).send(savedInventory);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

//Delete One **Mongo**
inventoryRouter.delete("/:inventoryId", async (req, res, next) => {
  try {
    const deletedInventory = await Inventory.findOneAndDelete({
      _id: req.params.inventoryId,
    });
    if (!deletedInventory) {
      res.status(404).send(`Inventory ${req.params.inventoryId} not found`);
    }
    res
      .status(200)
      .send(`Successfully deleted ${deletedInventory.item} from database`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//Update one Put request **Mongo**
inventoryRouter.put("/:inventoryId", async (req, res, next) => {
  try {
    const updatedInventory = await Inventory.findOneAndUpdate(
      {
        _id: req.params.inventoryId,
      },
      req.body,
      { new: true }
    );
    if (!updatedInventory) {
      return res
        .status(404)
        .send(`Inventory ${req.params.fugitiveId} does not exist`);
    }
    res.status(201).send(updatedInventory);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = inventoryRouter;
