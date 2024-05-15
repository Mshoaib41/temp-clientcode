const mongoose = require("mongoose");

const settingScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    logo: {
      type: String,
    },
    theme: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { 
      transform: function (doc, ret) {
        for (const iterator of ['__v', '_id', 'createdAt']) {
          delete ret[iterator]; 
        }
      }
    }
  }
);

module.exports = mongoose.model("Settings", settingScheme)
