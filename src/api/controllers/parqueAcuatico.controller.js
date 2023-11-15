const ParqueAcuatico = require("../models/parqueAcuatico.model");

const getParquesAcuaticos = async (req, res, next) => {
  try {
    const parquesAcuaticos = await ParqueAcuatico.find().populate("camping");
    return res.status(200).json(parquesAcuaticos);
  } catch (error) {
    return res.status(404).json("Parques acuaticos no encontrados", error);
  }
};

const getParqueAcuaticoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const parqueAcuatico = await ParqueAcuatico.findById(id).populate(
      "camping"
    );
    return res.status(200).json(parqueAcuatico);
  } catch (error) {
    return res.status(404).json("Parque acuatico no encontrado", error);
  }
};

const createParqueAcuatico = async (req, res, next) => {
  try {
    const newParqueAcuatico = new ParqueAcuatico(req.body);
    await newParqueAcuatico.save();
    return res.status(200).json(newParqueAcuatico);
  } catch (error) {
    return res.status(500).json("Fallo al crear nuevo parque acuatico", error);
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
    return res.status(500).json("Error al modificar parque acuatico", error);
  }
};

const addCamping = async (req, res, next) => {
  try {
    const { parqueacuaticoID } = req.body;
    const { campingID } = req.body;
    await ParqueAcuatico.findByIdAndUpdate(
      parqueacuaticoID,
      { $push: { camping: campingID } },
      { new: true }
    );
    return res.status(200).json("Camping added");
  } catch (error) {
    return res.status(500).json("Failed adding Camping");
  }
};

const deleteParqueAcuatico = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ParqueAcuatico.findByIdAndDelete(id);
    return res.status(200).json("Parque acuatico eliminado");
  } catch (error) {
    return res.status(500).json("Error al eliminar el parque acuatico");
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
