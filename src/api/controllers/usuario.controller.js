const usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const getAllUser = async (req, res, next) => {
  try {
    const usuarios = await usuario.find();
    return res.status(200).json(usuarios);
  } catch (error) {
    return next(new Error("no se encuentran usuarios"));
  }
};

const createUser = async (req, res, next) => {
  try {
    const usuarioNuevo = new usuario({
      ...req.body,
      avatar: req.file
        ? req.file.path
        : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1701970077/profiledefault_joguzg.jpg",
    });
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
    await usuarioNuevo.save();
    //revolvemos los mensajes de guardado
    return res.status(201).json(usuarioNuevo);
  } catch (error) {
    return next(new Error("no se crea"));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id, avatar } = req.params;
    const nuevoUsuario = new usuario(req.body);
    nuevoUsuario._id = id;
    await usuario.findByIdAndUpdate(
      id,
      {
        ...req.body,
        avatar: req.file
          ? req.file.path
          : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1701970077/profiledefault_joguzg.jpg",
      },

      { new: true }
    );
    return res.status(200).json("usuario modificado");
  } catch (error) {
    return next(new Error("error al modificar usuario"));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuarioABorrar = await usuario.findById(id);
    await usuario.findByIdAndDelete(id);
    return res.status(200).json("Usuario borrado");
  } catch (error) {
    return next(new Error("No lo borre"));
  }
};

const addFavorito = async (req, res, next) => {
  try {
    const { usuarioID } = req.body;
    const { campingID } = req.body;
    await usuario.findByIdAndUpdate(
      usuarioID,
      { $push: { favoritos: campingID } },
      { new: true }
    );
    return res.status(200).json("camping added");
  } catch (error) {
    return next(new Error("no se agrego nada"));
  }
};

const login = async (req, res, next) => {
  try {
    const existingUser = await usuario.findOne({ username: req.body.username });
    console.log(req.body);
    if (!existingUser) {
      return next(new Error("Este usuario no existe"));
    }
    if (bcrypt.compareSync(req.body.password, existingUser.password)) {
      const token = generateToken(existingUser._id, existingUser.username);
      console.log(token);
      return res.status(200).json({
        username: existingUser.username,
        id: existingUser._id,
        avatar: existingUser.avatar,
        token: token,
      });
    } else {
      return next(new Error("Password incorrect"));
    }
  } catch (error) {
    return next(new Error("Failed login"));
  }
};

module.exports = {
  createUser,
  updateUser,
  getAllUser,
  deleteUser,
  addFavorito,
  login,
};
