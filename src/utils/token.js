const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (id, username) => {
  if (!id || !username) {
    throw new Error("Username o id no encontrado");
  }

  return jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token no encontrado");
  }
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
