const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    type: Array,
    required: true
  },
  notification: {
    type: Number,
    required: true
  }
});

const Message = mongoose.model("message", MessageSchema);

module.exports = { Message };
