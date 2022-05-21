const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");

// Express Instance
const app = express();

// Middleware
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
