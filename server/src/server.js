const http = require("http");
const app = require("./app");

// Creating Server
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

// Listening to Server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
