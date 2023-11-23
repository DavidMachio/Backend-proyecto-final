const Camping = require("../models/camping.model");

const getAllCampings = async (req, res, next) => {
  try {
    const campings = await Camping.find();
    return res.status(200).json(campings);
  } catch (error) {
    return next(new Error("Camping no creado"));
  }
};

const getAllByPage = async (req, res, next) => {
  try {
    if (req.query.page && !isNaN(parseInt(req.query.page))) {
      const numCampings = await Camping.countDocuments();
      let page = parseInt(req.query.page);
      let limit = req.query.limit ? parseInt(req.query.limit) : 10;
      let numPages =
        numCampings % limit > 0 ? numCampings / limit + 1 : numCampings / limit;
      console.log(numPages);
      if (page > numPages || page < 1) {
        page = 1;
      }
      const skip = (page - 1) * limit;
      const allCampingsDB = await Camping.find().skip(skip).limit(limit);
      return res.status(200).json({
        info: {
          totalCampings: numCampings,
          page: page,
          limit: limit,
          next:
            numPages >= page + 1
              ? `/campings?page=${page + 1}&limit=${limit}`
              : null,
          prev:
            page != 1
              ? `https://spaincampingsdb.vercel.app/campings?page=${
                  page - 1
                }&limit=${limit}`
              : null,
        },
        campings: allCampingsDB,
      });
    } else {
      const allCampingsDB = await Camping.find().limit(10);
      const numCampings = await Camping.countDocuments();
      return res.status(200).json({
        info: {
          totalCampings: numCampings,
          page: 1,
          limit: 10,
          next:
            numCampings > 10
              ? `https://spaincampingsdb.vercel.app/campings?page=2&limit=10`
              : null,
          prev: null,
        },
        campings: allCampingsDB,
      });
    }
  } catch (error) {
    return next(
      "No se han podido solicitar los campings a la base de datos",
      error
    );
  }
};

const getCampingByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const accesible = await Camping.findOne({ nombre: name });
    return res.status(200).json(accesible);
  } catch (error) {
    return next(new Error("Camping no encontrado"));
  }
};

const getCampingByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camping = await Camping.findById(id);
    return res.status(200).json(camping);
  } catch (error) {
    return next(new Error("Camping no encontrado"));
  }
};

const createCamping = async (req, res, next) => {
  try {
    const newCamping = new Camping(req.body);
    await newCamping.save();
    return res.status(201).json(newCamping);
  } catch (error) {
    return next(new Error("Camping no creado"));
  }
};

const deleteCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Camping.findByIdAndDelete(id);
    return res.status(200).json("Camping  borrado");
  } catch (error) {
    return next(new Error("Camping no borrado"));
  }
};

const updateCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCamping = new Camping(req.body);
    newCamping._id = id;
    await Camping.findByIdAndUpdate(id, newCamping);
    return res.status(200).json("camping modificado");
  } catch (error) {
    return next(new Error("Camping no modificado"));
  }
};

const getCampingByProv = async (req, res, next) => {
  try {
    const { provincia } = req.params;
    const accesible = await Camping.find({ provincia: provincia });
    return res.status(200).json(accesible);
  } catch (error) {
    return next(new Error("Campings no encontrado"));
  }
};

module.exports = {
  getAllCampings,
  getCampingByName,
  getCampingByID,
  createCamping,
  deleteCamping,
  updateCamping,
  getCampingByProv,
  getAllByPage,
};
