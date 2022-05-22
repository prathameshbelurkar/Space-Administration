const express = require("express");
const { httpGetAllLaunches } = require("./launches.controller");

const launchesRouter = express.Router();

// Handling Routing
launchesRouter.get("/launches", httpGetAllLaunches);

module.exports = launchesRouter;
