const express = require("express");
const {
  getEntornos,
  getEntornoByPlace,
  getEntornoById,
  createEntorno,
  updateEntorno,
  deleteEntorno,
  addCamping,
} = require("../controllers/entorno.controllers");
const EntornoRouter = express.Router();
EntornoRouter.get("/", getEntornos);
EntornoRouter.get("/place/:place", getEntornoByPlace);
EntornoRouter.get("/id/:id", getEntornoById);
EntornoRouter.post("/", createEntorno);
EntornoRouter.patch("/", updateEntorno);
EntornoRouter.put("/add-camping", addCamping);
EntornoRouter.delete("/", deleteEntorno);
module.exports = EntornoRouter;
