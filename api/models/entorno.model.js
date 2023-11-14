const mongoose = require("mongoose");
const EntornoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      trim: true,
      default: "Eres más de montaña o de playa",
    },
    img: {
      type: String,
      default: "https://i.blogs.es/871e7b/portada-introvertidos/1366_2000.jpeg",
    },
    descripcion: {
      type: String,
      trim: true,
      default: "Echa un vistazo de los mejores campings catalogados por en",
    },
    place: {
      type: String,
      require: true,
      trim: true,
      enum: ["montaña", "playa"],
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
