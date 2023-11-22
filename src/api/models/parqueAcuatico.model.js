const mongoose = require("mongoose");
const ParqueAcuaticoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      trim: true,
      default: "Campings con parque acuático",
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/parqueacuatico_h0k3lv.jpg",
    },
    imgalt: {
      type: String,
      trim: true,
      default: "Foto de un parque acuatico con toboganes",
    },
    descripcion: {
      type: String,
      trim: true,
      default: "Echa un vistazo de los mejores campings con parques acuáticos",
    },
    campings: [
      {
        type: mongoose.Types.ObjectId,
        ref: "camping",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const ParqueAcuatico = mongoose.model("parqueacuatico", ParqueAcuaticoSchema);
module.exports = ParqueAcuatico;
