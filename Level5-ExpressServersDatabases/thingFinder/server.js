const express = require("express"); // import express
const app = express(); // created server calling express
const { v4: uuidv4 } = require("uuid");

// middleware to use express json turns it into "req.body"
app.use(express.json());

// middleware so we can find routes
app.use("/items", require("./routes/itemsRouter.js"));

// Listen on specific port number
app.listen(8999, () => {
  console.log("The server is running on Port 8999");
});
