const mongoose = require("mongoose");
const EntornoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      trim: true,
    },
    img: {
      type: String,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    place: {
      type: String,
      require: true,
      trim: true,
      enum: ["montaña", "playa", "ciudad"],
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
const Entorno = mongoose.model("entorno", EntornoSchema);
module.exports = Entorno;
