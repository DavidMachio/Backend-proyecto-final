const express = require("express");
require("dotenv").config();
//const cors = require("cors");
const connect = require("./src/utils/db");

const server = express();
//servidor conectado
connect();

//server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//routes
const CampingRouter = require("./src/api/routes/camping.routes");
server.use("/campings", CampingRouter);
const AccesibleRouter = require("./src/api/routes/accesible.routes");
server.use("/accesibles", AccesibleRouter);
const EntornoRouter = require("./src/api/routes/entorno.routes");
server.use("/entornos", EntornoRouter);
const ProvinciaRouter = require("./src/api/routes/provincia.routes");
server.use("/provincias", ProvinciaRouter);
const ParqueAcuaticoRouter = require("./src/api/routes/parqueacuatico.routes");
server.use("/parquesacuaticos", ParqueAcuaticoRouter);
server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server runnin on http://localhost:${PORT}`);
});
