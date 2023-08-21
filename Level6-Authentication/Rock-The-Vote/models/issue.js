const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  //adding user will create a one to many relationship for connection a user to all the todo's
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true, //we don't want any todo's without a user so this is required
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Issue", issueSchema);
