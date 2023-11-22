const express = require("express");

const {
  createUser,
  updateUser,
  getAllUser,
  deleteUser,
  addFavorito,
  login,
} = require("../controllers/usuario.controller");

const { upload } = require("../../middlewares/files.middleware");

const UsuarioRouter = express.Router();

UsuarioRouter.get("/", getAllUser);
UsuarioRouter.post("/", upload.single("avatar"), createUser);
UsuarioRouter.patch("/:id", upload.single("avatar"), updateUser);
UsuarioRouter.delete("/:id", deleteUser);
UsuarioRouter.put("/add-favorito", addFavorito);
UsuarioRouter.post("/login", login);

module.exports = UsuarioRouter;