const express = require("express");
const {
  getAllCampings,
  getCampingByName,
  getCampingByID,
  createCamping,
  deleteCamping,
  updateCamping,
  getCampingByProv,
  getAllByPage,
} = require("../controllers/camping.controller");
const { isAuth, isAdmin } = require("../../middlewares/auth.middleware");

const CampingRouter = express.Router();

CampingRouter.get("/", getAllCampings);
CampingRouter.get("/paginado", getAllByPage);
CampingRouter.get("/name/:name", getCampingByName);
CampingRouter.get("/id/:id", getCampingByID);
CampingRouter.post("/", createCamping);
CampingRouter.delete("/:id", deleteCamping);
CampingRouter.patch("/:id", updateCamping);
CampingRouter.get("/prov/:provincia", getCampingByProv),
  (module.exports = CampingRouter);
