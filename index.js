const express = require("express");
require("dotenv").config();
const connect = require("./src/utils/db");

const server = express();
//servidor conectado
connect();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const CampingRouter = require("./src/api/routes/camping.routes");
server.use("/campings", CampingRouter);
const AccesibleRouter = require("./src/api/routes/accesible.routes");
server.use("/accesibles", AccesibleRouter);
server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server runnin on http://localhost:${PORT}`);
});
