const Usuario = require("../api/models/usuario.model");
const { verifyToken } = require("../utils/token");

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return next(new Error("Unauthorized"));
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = await Usuario.findById(decoded.id);
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next("registrate");
    }
    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyToken(parsedToken, process.env.JWT_SECRET);
    const userLogued = await Usuario.findById(validToken.id);
    if (userLogued.rol == "admin") {
      userLogued.password = null;
      req.user = userLogued;
      next();
    } else {
      return next("Unauthorized");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { isAuth, isAdmin };
