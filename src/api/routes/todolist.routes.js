const express = require("express");

const {
  createTodo,
  updateTodo,
  getallTodo,
  deleteTodo,
} = require("../controllers/todolist.controller");

const { upload } = require("../../middlewares/files.middleware");

const TodolistRouter = express.Router();

TodolistRouter.get("/", getallTodo);
TodolistRouter.patch("/:id", updateTodo);
TodolistRouter.delete("/:id", deleteTodo);
TodolistRouter.post("/", upload.single("avatar"), createTodo);

module.exports = TodolistRouter;
