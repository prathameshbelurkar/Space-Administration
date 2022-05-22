const { planets } = require("../../models/planets.model");

// Handling Responses and Requests
function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
