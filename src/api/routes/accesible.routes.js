const express = require("express");
const {
  getAccesibles,
  getAccesibleById,
  createAccesible,
  updateAccesible,
  deleteAccesible,
  addCamping,
} = require("../controllers/accesible.controllers");
const AccesibleRouter = express.Router();
AccesibleRouter.get("/", getAccesibles);
AccesibleRouter.get("/:id", getAccesibleById);
AccesibleRouter.post("/", createAccesible);
AccesibleRouter.patch("/:id", updateAccesible);
AccesibleRouter.put("/add-camping", addCamping);
AccesibleRouter.delete("/:id", deleteAccesible);
module.exports = AccesibleRouter;
