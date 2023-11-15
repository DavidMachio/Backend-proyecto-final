const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UsuarioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validator: [validator.isEmail, "Email is not valid"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [8, "this format is not valid"],
    },
    avatar: {
      type: String,
      required: false,
      default:
        "https://www.elnacional.cat/enblau/uploads/s1/17/36/94/18/pocholo-martinez-bordiu-gtres.jpeg",
    },
    favoritos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "camping",
      },
    ],
  },
  {
    timestamps: true,
  },
  UsuarioSchema.pre("save", async function (next) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (error) {
      next(error);
    }
  })
);
const Usuario = mongoose.model("usuario", UsuarioSchema);
module.exports = Usuario;