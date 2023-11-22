const mongoose = require("mongoose");

const ComentarioSchema = new mongoose.Schema(
  {
    comentario: { type: String, required: true, trim: true },
    img: { type: String, trim: true },
    user: { type: String, trim: true },
    userAvatar: { type: String, trim: true },
    userID: { type: String, trim: true },
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
