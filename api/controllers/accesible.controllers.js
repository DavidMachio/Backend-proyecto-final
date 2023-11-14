const Accesible = require("../models/accesible.model");

const getAccesibles = async (req, res, next) => {
  try {
    const accesibles = await Accesible.find();
    return res.status(200).json(accesibles);
  } catch (error) {
    return res.status(404).json("Not found accesibles campings", error);
  }
};
