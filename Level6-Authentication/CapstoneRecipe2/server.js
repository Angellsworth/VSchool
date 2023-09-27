const express = require("express");
const app = express();
require("dotenv").config(); //lets the app know to use dotenv
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt"); //gatekeeper

app.use(express.json()); //convert data to json

app.use(morgan("dev"));

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, () =>
  console.log("Connected to the DB")
);

//For login and signup
app.use("/api/auth", require("./routes/authRouter.js"));

app.use(
  "/api/main",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

app.use("/api/main/recipe", require("./routes/recipeRouter.js"));

//Error handler to catch errors in login
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(8001, () => {
  console.log(`Angela, Don't cry. Your server is running on local port 8001`);
});
