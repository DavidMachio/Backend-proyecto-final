const express = require("express");
const {
  getAccesibles,
  getAccesibleById,
  createAccesible,
  updateAccesible,
  deleteAccesible,
  //getAccesibleByTipo,
} = require("../controllers/accesible.controllers");
const AccesibleRouter = express.Router();
AccesibleRouter.get("/", getAccesibles);
AccesibleRouter.get("/:id", getAccesibleById);
//AccesibleRouter.get("/:tipo", getAccesibleByTipo);
AccesibleRouter.post("/", createAccesible);
AccesibleRouter.patch("/", updateAccesible);
AccesibleRouter.delete("/", deleteAccesible);
module.exports = AccesibleRouter;
