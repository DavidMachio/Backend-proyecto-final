const express = require("express");
const {
  getParquesAcuaticos,
  getParqueAcuaticoById,
  createParqueAcuatico,
  updateParqueAcuatico,
  deleteParqueAcuatico,
  addCamping,
} = require("../controllers/parqueAcuatico.controller");
const ParqueAcuaticoRouter = express.Router();
ParqueAcuaticoRouter.get("/", getParquesAcuaticos);
ParqueAcuaticoRouter.get("/:id", getParqueAcuaticoById);
ParqueAcuaticoRouter.post("/", createParqueAcuatico);
ParqueAcuaticoRouter.patch("/", updateParqueAcuatico);
ParqueAcuaticoRouter.put("/add-camping", addCamping);
ParqueAcuaticoRouter.delete("/", deleteParqueAcuatico);
module.exports = ParqueAcuaticoRouter;
