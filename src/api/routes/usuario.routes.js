const express = require("express");

const { createUser } = require("../controllers/usuario.controller");

const UsuarioRouter = express.Router();

UsuarioRouter.post("/", createUser);

module.exports = UsuarioRouter;
