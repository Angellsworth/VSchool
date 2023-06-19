const express = require("express"); //npm install express
const app = express();
const morgan = require("morgan"); //npm install morgan
const mongoose = require("mongoose");

//middleware for every request
app.use("/", express.json()); //looks for a request body, and turns it into a 'req.body'
app.use(morgan("dev")); //logs requests to the console

//connect to database - need for every server
mongoose
  .connect("mongodb://localhost:27017/dogwalkdb")
  .then(() =>
    console.log(
      `Angie!!! You are connected to the dogwalk database. You are a goddamn Cheetah!!!`
    )
  )
  .catch((err) => console.log(err.message));

//middleware to find routes
app.use("/dogs", require("./routes/dogsRouter.js"));
app.use("/walkers", require("./routes/walkersRouter.js"));

//Error Handler Global - Add to each site you build
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

//listen
app.listen(5555, () => {
  console.log("This sexy beast server is running on Port 5555");
});
