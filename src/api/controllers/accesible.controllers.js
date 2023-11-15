const Accesible = require("../models/accesible.model");

const getAccesibles = async (req, res, next) => {
  try {
    const accesibles = await Accesible.find().populate("campings");
    return res.status(200).json(accesibles);
  } catch (error) {
    return res.status(404).json("Not found accesibles campings", error);
  }
};
const getAccesibleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const accesible = await Accesible.findById(id).populate("campings");
    return res.status(200).json(accesible);
  } catch (error) {
    return res.status(404).json("Category not found", error);
  }
};
const getAccesibleByTipo = async (req, res, next) => {
  try {
    const { tipo } = req.params;
    const accesible = await Accesible.findOne({ tipo: tipo });
    return res.status(200).json(accesible);
  } catch (error) {
    return res.status(404).json("Accesible not found");
  }
};

const createAccesible = async (req, res, next) => {
  try {
    const newAccesible = new Accesible(req.body);
    await newAccesible.save();
    return res.status(201).json(newAccesible);
  } catch (error) {
    return res.status(500).json("Failled creating category", error);
  }
};
module.exports = {
  getAccesibles,
  getAccesibleById,
  createAccesible,
  getAccesibleByTipo,
};
