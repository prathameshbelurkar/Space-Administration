const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

// Creating Server
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

// Start Server
async function startServer() {
  // Load Planets Data
  await loadPlanetsData();

  // Listening to Server
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

// Call Start Server
startServer();
