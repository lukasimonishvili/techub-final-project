const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: true
  }
});

const Feedback = mongoose.model("feedback", FeedbackSchema);

module.exports = { Feedback };
