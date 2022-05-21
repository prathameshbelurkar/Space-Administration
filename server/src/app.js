const express = require("express");

// Express Instance
const app = express();

// Middleware
app.use(express.json());

module.exports = app;
