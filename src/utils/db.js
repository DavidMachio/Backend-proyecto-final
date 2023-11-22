const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    const { name, host } = db.connection;
    console.log(`DB name : ${name} , host : ${host}`);
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

module.exports = connect;
