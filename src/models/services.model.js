const mongoose = require("mongoose");
// change to check code

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Services = mongoose.model("Services", serviceSchema);

module.exports = Services;
