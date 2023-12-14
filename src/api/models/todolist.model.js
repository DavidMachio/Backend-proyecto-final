const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema(
  {
    imgusuario: { type: String, trim: true },
    nombreusuario: { type: String, trim: true },
    titulo: { type: String, trim: true },
    descripcion: { type: String, trim: true },
    imgcomment: { type: String, trim: true },
    userID: { type: String, trim: true },
    revisar: { type: Boolean, default: false },
    confirmado: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const Todo = mongoose.model("todo", todolistSchema);

module.exports = Todo;
