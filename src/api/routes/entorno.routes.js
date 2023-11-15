const express = require("express");
const {
  getEntornos,
  getEntornoByPlace,
  getEntornoById,
  createEntorno,
  updateEntorno,
  deleteEntorno,
} = require("../controllers/entorno.controllers");
const EntornoRouter = express.Router();
EntornoRouter.get("/", getEntornos);
EntornoRouter.get("/place/:place", getEntornoByPlace);
EntornoRouter.get("/id/:id", getEntornoById);
//EntornoRouter.get("/:tipo", getEntornoByTipo);
EntornoRouter.post("/", createEntorno);
EntornoRouter.patch("/", updateEntorno);
EntornoRouter.delete("/", deleteEntorno);
module.exports = EntornoRouter;
