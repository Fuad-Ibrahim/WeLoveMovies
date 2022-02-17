// DEPENDENCIES
if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// ROUTES
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");
// ERROR HANDLERS
const notFound = require("./Errors/notFound");
const errorHandler = require("./Errors/errorHandler");

app.use(cors());
app.use(express.json());

// Route handlers
app.use("/", (req, res) => {
  res.send(
    "We Love Movies... please use '/' and the type movies, theaters or reviews to see the data"
  );
});
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

// Error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;
