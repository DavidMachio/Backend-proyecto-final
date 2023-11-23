const ParqueAcuatico = require("../models/parqueAcuatico.model");

const getParquesAcuaticos = async (req, res, next) => {
  try {
    const parquesAcuaticos = await ParqueAcuatico.find().populate("campings");
    return res.status(200).json(parquesAcuaticos);
  } catch (error) {
    return next(new Error("ParqueAcuatico no encontrado"));
  }
};

const getParqueAcuaticoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const parqueAcuatico = await ParqueAcuatico.findById(id).populate(
      "campings"
    );
    return res.status(200).json(parqueAcuatico);
  } catch (error) {
    return next(new Error("ParqueAcuatico no encontrado"));
  }
};

const createParqueAcuatico = async (req, res, next) => {
  try {
    const newParqueAcuatico = new ParqueAcuatico(req.body);
    await newParqueAcuatico.save();
    return res.status(200).json(newParqueAcuatico);
  } catch (error) {
    return next(new Error("ParqueAcuatico no encontrado"));
  }
};
const updateParqueAcuatico = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newParqueAcuatico = new ParqueAcuatico(req.body);
    newParqueAcuatico._id = id;
    await ParqueAcuatico.findByIdAndUpdate(id, newParqueAcuatico, {
      new: true,
    });
    return res.status(200).json("Parque acuatico modificado");
  } catch (error) {
    return next(new Error("ParqueAcuatico no encontrado"));
  }
};

const addCamping = async (req, res, next) => {
  try {
    const { parqueacuaticoID } = req.body;
    const { campingID } = req.body;
    await ParqueAcuatico.findByIdAndUpdate(
      parqueacuaticoID,
      { $push: { campings: campingID } },
      { new: true }
    );
    return res.status(200).json("Camping added");
  } catch (error) {
    return next(new Error("ParqueAcuatico no encontrado"));
  }
};

const deleteParqueAcuatico = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ParqueAcuatico.findByIdAndDelete(id);
    return res.status(200).json("Parque acuatico eliminado");
  } catch (error) {
    return next(new Error("ParqueAcuatico no encontrado"));
  }
};

module.exports = {
  getParquesAcuaticos,
  getParqueAcuaticoById,
  createParqueAcuatico,
  updateParqueAcuatico,
  deleteParqueAcuatico,
  addCamping,
};
