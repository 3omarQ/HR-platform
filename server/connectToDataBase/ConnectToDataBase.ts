const mongoose = require("mongoose");
const urlDataBase = process.env.MONGODBURL
const connectToDataBase = async () => {
  try {
    await mongoose
      .connect(urlDataBase)
      .then(console.log("we connect successfuly with dataBase :)"));
  } catch (error: unknown) {
    console.log("can't connect with dataBase", error);
  }
};

module.exports = connectToDataBase;