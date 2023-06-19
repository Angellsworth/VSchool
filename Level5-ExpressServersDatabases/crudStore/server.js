const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid"); // correct import for 2023
const morgan = require("morgan");
const mongoose = require("mongoose");

//Middleware (for every request)
app.use(express.json()); //looks for a request body and turns it into a 'req.body'
app.use(morgan("dev"));

//connect to database
mongoose
  .connect("mongodb://localhost:27017/crudstoredb")
  .then(() =>
    console.log(
      `Connected to the Mongoose database. Good Job Angie! Don't quit!!`
    )
  )
  .catch((err) => console.log(err.message));
//27017 is the default port number for mongodb local

//Routes
app.use("/inventory", require("./routes/inventoryRouter.js"));

//Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message }); //this return will post the err message from inventory router
});

//listen needs 2 arguments 1. PORT 2. Call Back function
app.listen(5050, () => {
  console.log("The server is running on Port 5050. Kick ass Angie!");
});
