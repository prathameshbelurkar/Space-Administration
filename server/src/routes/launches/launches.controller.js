const { launches } = require("../../models/launches.model");

// Get All Launches
function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
  getAllLaunches,
};
