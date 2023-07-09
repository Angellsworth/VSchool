const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt"); //acts as gate keeper

// process.env.SECRET

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/user-authentication", () =>
  console.log("Connected to the DB")
);

app.use("/auth", require("./routes/authRouter"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
); // checks /api and triggers this to look for token req.user
app.use("/api/todo", require("./routes/todoRouter.js")); // finds token and request goes on like normal

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    // no token was found error
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`);
});
