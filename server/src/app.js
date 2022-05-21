const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

// Express Instance
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
