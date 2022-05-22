const { getAllPlanets } = require("../../models/planets.model");

// Handling Responses and Requests
function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
