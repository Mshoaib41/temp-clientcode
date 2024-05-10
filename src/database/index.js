const mongoose = require("mongoose");
const { DB_URL } = require("../config");

const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log(`DB Connected: Connection String is ${DB_URL}`);
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1);
  }
};

module.exports = dbConnection;
