const dotenv = require("dotenv");
dotenv.config();
const { PORT, DEBUG_MODE, DB_URL, JWT_SECRET, JWT_EXPIRY } = process.env;

module.exports = {
  PORT,
  DEBUG_MODE,
  DB_URL,
  JWT_SECRET,
  JWT_EXPIRY,
};
