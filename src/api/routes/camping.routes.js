const express = require("express");
const {
  getAllCampings,
  getCampingByName,
  getCampingByID,
  createCamping,
  deleteCamping,
  updateCamping,
} = require("../controllers/camping.controller");

const CampingRouter = express.Router();

CampingRouter.get("/", getAllCampings);
CampingRouter.get("/name/:name", getCampingByName);
CampingRouter.get("/id/:id", getCampingByID);
CampingRouter.post("/", createCamping);
CampingRouter.delete("/:id", deleteCamping);
CampingRouter.patch("/:id", updateCamping);

module.exports = CampingRouter;
