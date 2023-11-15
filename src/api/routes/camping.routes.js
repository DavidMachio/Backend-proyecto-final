const express = require("express");
const {
  getAllCampings,
  getCampingByID,
  createCamping,
  deleteCamping,
  updateCamping,
} = require("../controllers/camping.controller");

const CampingRouter = express.Router();

CampingRouter.get("/", getAllCampings);
CampingRouter.get("/:id", getCampingByID);
CampingRouter.post("/", createCamping);
CampingRouter.delete("/:id", deleteCamping);
CampingRouter.patch("/:id", updateCamping);

module.exports = CampingRouter;
