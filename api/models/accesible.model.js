const mongoose = require("mongoose");
const AccesibleSchema = new mongoose.Schema(
  {
    titulo: { type: String, trim: true, default: "Campings accesibles" },
    img: {
      type: String,
      default:
        "https://www.sunrisemedical.es/getmedia/9f5548b8-0db7-4970-a9c8-9afa53274445/campings-accesibles.jpg?width=1200&height=627&ext=.jpg",
    },
    descripcion: {
      type: String,
      trim: true,
      default: "Aqui encontrarás los mejores campings accesibles en España",
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
const Accesible = mongoose.model("accesible", AccesibleSchema);
module.exports = Accesible;
