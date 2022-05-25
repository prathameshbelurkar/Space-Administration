const express = require("express");
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

// Handling Routing
launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);

module.exports = launchesRouter;
