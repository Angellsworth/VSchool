const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//walker blueprint
const walkerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Walker", walkerSchema);
