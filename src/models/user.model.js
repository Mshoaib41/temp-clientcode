const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { 
      transform: function (doc, ret) {
        for (const iterator of ['password', '__v', 'createdAt', 'updatedAt']) {
          delete ret[iterator]; 
        }
      }
    }
  }
);

module.exports =  mongoose.model("User", userSchema);
