const express = require("express");

// Importing Controllers
const { httpGetAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

// Setting Paths
planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;
