const mongoose = require("mongoose");

const BlogcomSchema = new mongoose.Schema(
  {
    comentario: { type: String, required: true, trim: true },
    img: { type: String, trim: true },
    user: { type: String, trim: true },
    userAvatar: { type: String, trim: true },
    userID: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Blogcom = mongoose.model("blogcom", BlogcomSchema);
module.exports = Blogcom;
