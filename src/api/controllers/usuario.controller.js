const usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  try {
    const usuarioNuevo = new usuario(req.body);
    //buscamos los datos para poder comprovar si estan duplicados
    const mailDuplicado = await usuario.findOne({ email: usuarioNuevo.email });
    const usernameDuplicado = await usuario.findOne({
      username: usuarioNuevo.username,
    });
    //con este if vemos si esta el campo email y username estan duplicados
    if (mailDuplicado) {
      return next("Mail ya registrada en la base de datos");
    }
    //con este vemos si se repite el username
    if (usernameDuplicado) {
      return next("username no disponible");
    }
    //guardamops usuario en db
    const usuarioDB = await usuarioNuevo.save();
    //revolvemos los mensajes de guardado
    return res.status(201).json(usuarioDB);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
};
