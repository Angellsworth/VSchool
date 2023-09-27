const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }, // one to many relationship
});

module.exports = mongoose.model("Recipe", recipeSchema);

// const mongoose = require("mongoose");

// const recipeSchema = new mongoose.Schema({
//   title: String,
//   ingredients: String,
//   instructions: String,
//   cookingTime: Number, // Use number type for cookingTime
//   imgUrl: String,
//   user: String,
// });

// const Recipe = mongoose.model("Recipe", recipeSchema);

// module.exports = Recipe;
