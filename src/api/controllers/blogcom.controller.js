const blogcom = require("../models/blogcom.model");

const createBlogcom = async (req, res, next) => {
  try {
    const newComent = new blogcom({
      ...req.body,
      img: req.file
        ? req.file.path
        : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1702154458/placeholder-image_p1zmh1.jpg",
    });
    await newComent.save();
    return res.status(200).json(newComent);
  } catch (error) {
    return next(new Error("Error al crear blogcom"));
  }
};
const deleteBlogcom = async (req, res, next) => {
  try {
    const { id } = req.params;
    await blogcom.findByIdAndDelete(id);
    return res.status(200).json("blogcom borrado");
  } catch (error) {
    return next(new Error("Error al borrar blogcom"));
  }
};

const getallBlogcom = async (req, res, next) => {
  try {
    const blogcoms = await blogcom.find();
    return res.status(200).json(blogcoms);
  } catch (error) {
    return next(new Error("blogcom no encontrados"));
  }
};

module.exports = {
  createBlogcom,
  deleteBlogcom,
  getallBlogcom,
};
