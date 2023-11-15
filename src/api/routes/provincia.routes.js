const express = require("express");
const {
  getProvincias,
  getProvinciaById,
  createProvincia,
  updateProvincia,
  deleteProvincia,
} = require("../controllers/provincia.controller");
const ProvinciaRouter = express.Router();
ProvinciaRouter.get("/", getProvincias);
ProvinciaRouter.get("/:id", getProvinciaById);
ProvinciaRouter.post("/", createProvincia);
ProvinciaRouter.patch("/", updateProvincia);
ProvinciaRouter.delete("/", deleteProvincia);
module.exports = ProvinciaRouter;
