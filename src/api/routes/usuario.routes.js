const express = require("express");

const {
  createUser,
  updateUser,
  getAllUser,
} = require("../controllers/usuario.controller");

const { upload } = require("../../middlewares/files.middleware");

const UsuarioRouter = express.Router();

UsuarioRouter.get("/", getAllUser);
UsuarioRouter.post("/", upload.single("avatar"), createUser);
UsuarioRouter.patch("/:id", upload.single("avatar"), updateUser);

module.exports = UsuarioRouter;
