const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = { Comment };
