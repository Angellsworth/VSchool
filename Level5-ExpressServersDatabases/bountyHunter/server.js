const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid"); // manually add id

// Middleware- (for every request)
app.use(express.json()); // looks for a request body, and turns it into "req.body"

// Middleware Routes
app.use("/fugitive", require("./routes/fugitiveRouter.js"));

// Server Listen
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
