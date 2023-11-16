const mongoose = require("mongoose");
const AccesibleSchema = new mongoose.Schema(
  {
    titulo: { type: String, trim: true, default: "Campings accesibles" },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/portadaaccesibles_ssn9fw.jpg",
    },
    imgalt: {
      type: String,
      trim: true,
      default: "Chico con silla de ruedas tomando el sol sentedo en el cesped",
    },
    descripcion: {
      type: String,
      trim: true,
      default: "Aqui encontrarás los mejores campings accesibles en España",
    },
    tipo: {
      type: String,
      require: true,
      trim: true,
      enum: ["visual", "auditivo", "movilidad"],
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
