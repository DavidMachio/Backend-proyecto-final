const Camping = require("../models/camping.model");

const getAllCampings = async (req, res, next) => {
  try {
    const campings = await Camping.find();
    return res.status(200).json(campings);
  } catch (error) {
    return next(new Error("Camping no creado"));
  }
};
const getCampingByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const accesible = await Camping.findOne({ nombre: name });
    return res.status(200).json(accesible);
  } catch (error) {
    return next(new Error("Camping no encontrado"));
  }
};

const getCampingByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camping = await Camping.findById(id);
    return res.status(200).json(camping);
  } catch (error) {
    return next(new Error("Camping no encontrado"));
  }
};

const createCamping = async (req, res, next) => {
  try {
    const newCamping = new Camping(req.body);
    await newCamping.save();
    return res.status(201).json(newCamping);
  } catch (error) {
    return next(new Error("Camping no creado"));
  }
};

const deleteCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Camping.findByIdAndDelete(id);
    return res.status(200).json("Camping  borrado");
  } catch (error) {
    return next(new Error("Camping no borrado"));
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
    return next(new Error("Camping no modificado"));
  }
};

const getCampingByProv = async (req, res, next) => {
  try {
    const { provincia } = req.params;
    const accesible = await Camping.find({ provincia: provincia });
    return res.status(200).json(accesible);
  } catch (error) {
    return next(new Error("Campings no encontrado"));
  }
};

module.exports = {
  getAllCampings,
  getCampingByName,
  getCampingByID,
  createCamping,
  deleteCamping,
  updateCamping,
  getCampingByProv,
};
