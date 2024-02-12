const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");

/////Movies///////

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

/////Users///////

const userControllers = require("./controllers/userControllers");

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

module.exports = app;
