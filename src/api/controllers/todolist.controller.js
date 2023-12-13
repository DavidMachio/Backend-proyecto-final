const Todo = require("../models/todolist.model");

const createTodo = async (req, res, next) => {
  try {
    const newTodo = new Todo({
      ...req.body,
      imgcomment: req.file
        ? req.file.path
        : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1702154458/placeholder-image_p1zmh1.jpg",
    });
    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return next(new Error("Error al crear Todo"));
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    return res.status(200).json("Todo borrado");
  } catch (error) {
    return next(new Error("Error al borrar Todo"));
  }
};

const getallTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    return next(new Error("todos no encontrados"));
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newTodo = new Todo(req.body);
    newTodo._id = id;
    await Todo.findByIdAndUpdate(id, newTodo, { new: true });
    return res.status(200).json("Usuario modificado");
  } catch (error) {
    return next(new Error("Error al modificar"));
  }
};

module.exports = {
  createTodo,
  updateTodo,
  getallTodo,
  deleteTodo,
};
