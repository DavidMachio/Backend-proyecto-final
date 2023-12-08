const comentario = require("../models/comentarios.model");

const createComentario = async (req, res, next) => {
  try {
    const newComent = new comentario({
      ...req.body,
      img: req.file ? req.file.path : "",
    });
    await newComent.save();
    return res.status(200).json(newComent);
  } catch (error) {
    return next(new Error("Error al crear comentario"));
  }
};
const deleteComentario = async (req, res, next) => {
  try {
    const { id } = req.params;
    await comentario.findByIdAndDelete(id);
    return res.status(200).json("Comentario borrado");
  } catch (error) {
    return next(new Error("Error al borrar comentario"));
  }
};

const getallComentarios = async (req, res, next) => {
  try {
    const comentarios = await comentario.find();
    return res.status(200).json(comentarios);
  } catch (error) {
    return next(new Error("comentarios no encontrados"));
  }
};

module.exports = {
  createComentario,
  deleteComentario,
  getallComentarios,
};
