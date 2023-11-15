const express = require("express");
const {
  getAccesibles,
  getAccesibleById,
  createAccesible,
  //getAccesibleByTipo,
} = require("../controllers/accesible.controllers");
const AccesibleRouter = express.Router();
AccesibleRouter.get("/", getAccesibles);
AccesibleRouter.get("/:id", getAccesibleById);
//AccesibleRouter.get("/:tipo", getAccesibleByTipo);
AccesibleRouter.post("/", createAccesible);
module.exports = AccesibleRouter;
