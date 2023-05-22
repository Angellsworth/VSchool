//First Express Server
const express = require("express");
const app = express();
// const uuid = require("uuid/v4");incorrect import
const { v4: uuidv4 } = require("uuid"); // correct import for 2023

// Middleware (for every request)
app.use("/", express.json()); // Looks for a request body, and turns it into 'req.body'

// Routes
app.use("/movies", require("./routes/movieRouter.js"));

app.listen(7676, () => {
  console.log("The server is running on Port 7676");
});
