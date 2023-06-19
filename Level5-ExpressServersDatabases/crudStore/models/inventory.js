const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Movie Blueprint
const inventorySchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["clothing", "toy"],
    required: true,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);

//Fake Inventory
// const inventory = [
//   { item: "Shirt", type: "clothing", _id: uuidv4() },
//   { item: "Barbie Doll", type: "toy", _id: uuidv4() },
//   { item: "Kite", type: "toy", _id: uuidv4() },
//   { item: "Dress", type: "clothing", _id: uuidv4() },
// ];
