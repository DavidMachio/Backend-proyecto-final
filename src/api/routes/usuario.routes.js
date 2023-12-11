const express = require("express");

const {
  createUser,
  updateUser,
  updateAvatar,
  getAllUser,
  deleteUser,
  addFavorito,
  removeFavorito,
  getUserByID,
  login,
} = require("../controllers/usuario.controller");

const { upload } = require("../../middlewares/files.middleware");

const UsuarioRouter = express.Router();

UsuarioRouter.get("/", getAllUser);
UsuarioRouter.post("/", upload.single("avatar"), createUser);
UsuarioRouter.patch("/avatar/:id", upload.single("avatar"), updateAvatar);
UsuarioRouter.patch("/datos/:id", updateUser);
UsuarioRouter.delete("/:id", deleteUser);
UsuarioRouter.put("/add-favorito", addFavorito);
UsuarioRouter.put("/remove-favorito", removeFavorito);
UsuarioRouter.get("/:id", getUserByID);
UsuarioRouter.post("/login", login);

module.exports = UsuarioRouter;
