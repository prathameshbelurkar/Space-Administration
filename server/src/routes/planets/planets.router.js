const express = require("express");

// Importing Controllers
const { getAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

// Setting Paths
planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
