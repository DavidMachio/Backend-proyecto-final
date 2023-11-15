const Provincia = require("../models/provincia.model");

const getProvincias = async (req, res, next) => {
  try {
    const provincias = await Provincia.find().populate("camping");
    return res.status(200).json(provincias);
  } catch (error) {
    return res.status(404).json("Provincias no encontradas", error);
  }
};
const getProvinciaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const provincias = await Provincias.findById().populate("camping");
    return res.status(200).json(provincias);
  } catch (error) {
    return res.status(404).json("Provincia no encontrada", error);
  }
};
const createProvincia = async (req, res, next) => {
  try {
    const newProvincia = new Provincia(req.body);
    await newProvincia.save();
    return res.status(200).json(newProvincia);
  } catch (error) {
    return res.status(500).json("Fallo al crear nueva provincia", error);
  }
};
const updateProvincia = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newProvincia = new Provincia(req.body);
    newProvincia._id = id;
    await Provincia.findByIdAndUpdate(id, newProvincia);
    return res.status(200).json("Provincia modificado");
  } catch (error) {
    return res.status(500).json("Error al modificar provincia", error);
  }
};
const deleteProvincia = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Provincia.findByIdAndDelete(id);
    return res.status(200).json("Provincia eliminada");
  } catch (error) {
    return res.status(500).json("Error al eliminar la provincia");
  }
};
module.exports = {
  getProvincias,
  getProvinciaById,
  createProvincia,
  updateProvincia,
  deleteProvincia,
};
