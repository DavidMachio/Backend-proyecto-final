const Entorno = require("../models/entorno.model");
const getEntornos = async (req, res, next) => {
  try {
    const entornos = await Entorno.find().populate("campings");
    return res.status(200).json(entornos);
  } catch (error) {
    return next(new Error("No se puede conseguir los entornos"));
  }
};
const getEntornoByPlace = async (req, res, next) => {
  try {
    const { place } = req.params;
    const entorno = await Entorno.findOne({ place: place }).populate(
      "campings"
    );
    return res.status(200).json(entorno);
  } catch (error) {
    return next(new Error("Entorno no encontrado"));
  }
};

const getEntornoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const entorno = await Entorno.findById(id).populate("campings");
    return res.status(200).json(entorno);
  } catch (error) {
    return next(new Error("Entorno no encontrado"));
  }
};
const createEntorno = async (req, res, next) => {
  try {
    const newEntorno = new Entorno(req.body);
    await newEntorno.save();
    return res.status(201).json(newEntorno);
  } catch (error) {
    return next(new Error("Entorno no creado"));
  }
};
const updateEntorno = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newEntorno = new Entorno(req.body);
    newEntorno._id = id;
    await Entorno.findByIdAndUpdate(id, newEntorno, { new: true });
    return res.status(200).json("Entorno modificado");
  } catch (error) {
    return next(new Error("Entorno no modificado"));
  }
};

const addCamping = async (req, res, next) => {
  try {
    const { entornoID } = req.body;
    const { campingID } = req.body;
    await Entorno.findByIdAndUpdate(
      entornoID,
      { $push: { campings: campingID } },
      { new: true }
    );
    return res.status(200).json("Camping added");
  } catch (error) {
    return next(new Error("Camping no agregado"));
  }
};

const deleteEntorno = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Entorno.findByIdAndDelete(id);
    return res.status(200).json("Entorno  borrado");
  } catch (error) {
    return next(new Error("Entorno no borrado"));
  }
};
module.exports = {
  getEntornos,
  getEntornoByPlace,
  getEntornoById,
  createEntorno,
  updateEntorno,
  deleteEntorno,
  addCamping,
};
