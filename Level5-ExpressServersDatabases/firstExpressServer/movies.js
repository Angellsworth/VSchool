//First Express Server
const express = require("express");
const app = express();

// Fake Data

const movies = [
  { title: "die hard", genre: "action" },
  { title: "star wars IV", genre: "fantasy" },
  { title: "lion king", genre: "fantasy" },
];

//   1. Endpoint (mount path)
//   2. CallBack function

app.get("/movies", (req, res) => {
  res.send(movies);
});

//  1:Port, 2:CB
app.listen(7676, () => {
  console.log("The server is running on Port 7676");
});
