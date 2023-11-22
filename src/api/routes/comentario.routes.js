const express = require("express");

const {
  createComentario,
  deleteComentario,
  getallComentarios,
} = require("../controllers/comentarios.controller");

const { upload } = require("../../middlewares/files.middleware");

const ComentarioRouter = express.Router();

ComentarioRouter.get("/", getallComentarios);
ComentarioRouter.post("/", upload.single("img"), createComentario);
ComentarioRouter.delete("/:id", deleteComentario);

module.exports = ComentarioRouter;
