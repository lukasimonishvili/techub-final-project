const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    eMail: {
      type: String,
      required: true
    },
    birthDay: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
    cart: {
      type: Array,
      required: true
    },
    shoppHistory: {
      type: Array,
      required: true
    },
    status: String
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

module.exports = { User };
