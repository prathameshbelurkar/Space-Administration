const { getAllLaunches } = require("../../models/launches.model");

// Get All Launches
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

module.exports = {
  httpGetAllLaunches,
};
