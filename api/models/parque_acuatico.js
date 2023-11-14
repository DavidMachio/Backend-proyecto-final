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
        "https://www.campingsalon.com/wp-content/uploads/2017/05/la-marina-3.jpg",
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
