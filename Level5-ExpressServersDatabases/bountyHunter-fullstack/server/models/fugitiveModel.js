const mongoose = require("mongoose");
const { stringify } = require("uuid");
const Schema = mongoose.Schema;

// Fugitive Blueprint
const fugitiveSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //   living: {
  //     type: Boolean,
  //     required: true,
  //   },
  aligned: {
    type: String,
    enum: ["Sith", "Jedi"],
    required: true,
  },
  reward: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Fugitive", fugitiveSchema);
