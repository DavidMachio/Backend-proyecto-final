const Camping = require("../models/camping.model");

const getAllCampings = async (req, res, next) => {
  try {
    const campings = await Camping.find();
    return res.status(200).json(campings);
  } catch (error) {
    return res.status(404).json("Camping no creado", error);
  }
};
const getCampingByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const accesible = await Camping.findOne({ nombre: name });
    return res.status(200).json(accesible);
  } catch (error) {
    return res.status(404).json("Camping no encontrado");
  }
};

const getCampingByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camping = await Camping.findById(id);
    return res.status(200).json(camping);
  } catch (error) {
    return res.status(404).json("Camping no encontrado", error);
  }
};

const createCamping = async (req, res, next) => {
  try {
    const newCamping = new Camping(req.body);
    await newCamping.save();
    return res.status(201).json(newCamping);
  } catch (error) {
    return res.status(500).json("camping no creado", error);
  }
};

const deleteCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Camping.findByIdAndDelete(id);
    return res.status(200).json("Camping  borrado");
  } catch (error) {
    return res.status(500).json("error al borrar camping", error);
  }
};

const updateCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCamping = new Camping(req.body);
    newCamping._id = id;
    await Camping.findByIdAndUpdate(id, newCamping);
    return res.status(200).json("camping modificado");
  } catch (error) {
    return res.status(500).json("Error  al modificar", error);
  }
};

module.exports = {
  getAllCampings,
  getCampingByName,
  getCampingByID,
  createCamping,
  deleteCamping,
  updateCamping,
};
