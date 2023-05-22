const express = require("express"); // import express
const app = express(); // created server calling express
const { v4: uuidv4 } = require("uuid");

// middleware to use express json turns it into "req.body"
app.use(express.json());

// middleware with next
app.use("/items", (req, res, next) => {
  console.log("THE ITEMS MIDDLEWARE WAS EXECUTED");
  next();
});

// middleware so we can find routes
app.use("/items", require("./routes/itemsRouter.js"));

// Listen on specific port number
app.listen(8000, () => {
  console.log("The server is running on Port 8000");
});
