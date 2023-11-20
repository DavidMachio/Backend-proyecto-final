const multer = require("multer");
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  folder: "avatarusuarios",
  allowedFormats: ["jpg", "png", "jpeg", "gif"],
});

const upload = multer({ storage });

const deleteimgCloudinary = (imgUrl) => {
  //Con los siguientes métodos de JavaScript accederemos a la ruta de la imagen, su nombre, su carpeta y el id con el que se almacena en cloudinary para localizarlo nivel a nivel.
  const imgSplited = imgUrl.split("/");
};

//sin terminar
