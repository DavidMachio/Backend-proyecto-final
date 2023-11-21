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
  },
  {
    timestamps: true,
  }
);
const Comentario = mongoose.model("comentario", ComentarioSchema);
module.exports = Comentario;
