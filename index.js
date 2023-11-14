const express = require("express");
require("dotenv").config();
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("*", (req, res, next) => {
  res.end("Route not found");
});
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server runnin on http://localhost:${PORT}`);
});
