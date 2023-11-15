const Entorno = require("../models/entorno.model");
const getEntornos = async (req, res, next) => {
  try {
    const entornos = await Entorno.find().populate("camping");
    return res.status(200).json(entornos);
  } catch (error) {
    return res.status(404).json("Entorno no encontrado", error);
  }
};
const getEntornoByPlace = async (req, res, next) => {
  try {
    const { place } = req.params;
    const entorno = await Entorno.findByOne({ place: place }).populate(
      "camping"
    );
    return res.status(200).json(entorno);
  } catch (error) {
    return res.status(404).json("Entorno no encontrado", error);
  }
};

const getEntornoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const entorno = await Entorno.findById(id).populate(campings);
    return res.status(200).json(entorno);
  } catch (error) {
    return res.status(404).json("Entorno no encontrado", error);
  }
};
const createEntorno = async (req, res, next) => {
  try {
    const newEntorno = new Entorno(req.body);
    await newEntorno.save();
    return res.status(201).json(newEntorno);
  } catch (error) {
    return res.status(500).json("Failled creating entorno", error);
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
    return res.status(500).json("Error  al modificar entorno", error);
  }
};

const addCamping = async (req, res, next) => {
  try {
    const { entornoID } = req.body;
    const { campingID } = req.body;
    await Entorno.findByIdAndUpdate(
      entornoID,
      { $push: { camping: campingID } },
      { new: true }
    );
    return res.status(200).json("Camping added");
  } catch (error) {
    return res.status(500).json("Failed adding Camping");
  }
};

const deleteEntorno = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Entorno.findByIdAndDelete(id);
    return res.status(200).json("Entorno  borrado");
  } catch (error) {
    return res.status(500).json("Error al borrar entorno", error);
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
