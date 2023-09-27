const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true, // username is required
    lowercase: true, // forced to lowercase when saved
    unique: true, // one username per user
  },
  password: {
    type: String,
    required: true, // password is required
  },
  memberSince: {
    type: Date, // saves date when user joined
    default: Date.now,
  },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

// pre-save hook to encrypt user passwords on signup
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, 10, (err, hash) => {
    // hash creates a version of password to send to the database
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

// method to check encrypted password on login
userSchema.methods.checkPassword = function (passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) return callback(err);
    return callback(null, isMatch);
  });
};

// method to remove user's password for token/sending the response
userSchema.methods.withoutPassword = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", userSchema);
