const Accesible = require("../models/accesible.model");

const getAccesibles = async (req, res, next) => {
  try {
    const accesibles = await Accesible.find().populate("campings");
    return res.status(200).json(accesibles);
  } catch (error) {
    return next(new Error("bad request"));
  }
};
const getAccesibleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const accesible = await Accesible.findById(id).populate("campings");
    return res.status(200).json(accesible);
  } catch (error) {
    return next(new Error("No se encuentra informacion con esta id"));
  }
};

const createAccesible = async (req, res, next) => {
  try {
    const newAccesible = new Accesible(req.body);
    await newAccesible.save();
    return res.status(201).json(newAccesible);
  } catch (error) {
    return next(new Error("Fallo al crear"));
  }
};
const updateAccesible = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAccesible = new Accesible(req.body);
    newAccesible._id = id;
    await Accesible.findByIdAndUpdate(id, newAccesible, { new: true });
    return res.status(200).json("Accesible modificado");
  } catch (error) {
    return next(new Error("Error al modificar"));
  }
};

const addCamping = async (req, res, next) => {
  try {
    const { accesibleID } = req.body;
    const { campingID } = req.body;
    await Accesible.findByIdAndUpdate(
      accesibleID,
      { $push: { campings: campingID } },
      { new: true }
    );
    return res.status(200).json("Camping added");
  } catch (error) {
    return next(new Error("Error al agregar camping"));
  }
};

const deleteAccesible = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Accesible.findByIdAndDelete(id);
    return res.status(200).json("Accesible  borrado");
  } catch (error) {
    return next(new Error("Error al borrar"));
  }
};
module.exports = {
  getAccesibles,
  getAccesibleById,
  createAccesible,
  updateAccesible,
  deleteAccesible,
  addCamping,
};
