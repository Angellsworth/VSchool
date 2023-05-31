const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid"); // manually add id
const morgan = require("morgan");

// Middleware- (for every request)
app.use(express.json()); // looks for a request body, and turns it into "req.body"
app.use(morgan("dev")); // Logs requests to the console

// Middleware Routes
app.use("/todo", require("./routes/todoRouter.js"));

app.listen(8888, () => {
  console.log("The server is running on Port 8888");
});
