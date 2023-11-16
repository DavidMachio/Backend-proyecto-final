const mongoose = require("mongoose");

const imgSchema = new Schema({ url: String });

const ComentarioSchema = new mongoose.Schema(
  {
    comentario: { type: String, required: true, trim: true },
    imgs: [imgSchema],
    campings: [
      {
        type: mongoose.Types.ObjectId,
        ref: "camping",
      },
    ],
    user: {
      img: { type: String, trim: true },
      nombre: { type: String, trim: true },
    },
  },
  {
    timestamps: true,
  }
);
const Comentario = mongoose.model("comentario", ComentarioSchema);
module.exports = Comentario;
