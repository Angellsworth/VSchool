const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid"); // manually add id
const morgan = require("morgan");
const mongoose = require("mongoose");

// Middleware- (for every request)
app.use(express.json()); // looks for a request body, and turns it into "req.body"
app.use(morgan("dev")); //Logs requests to the console

// Connect to DataBase DB
mongoose
  .connect("mongodb://localhost:27017/bountyHunterdb")
  .then(() =>
    console.log(
      `Connected to the Mongoose database. Good Job Angie! Don't quit!!`
    )
  )
  .catch((err) => console.log(err.message));

// Routes Middleware
app.use("/fugitive", require("./routes/fugitiveRouter.js"));

// Error handler *Put between routes and listen
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

// Server Listen
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
