const mongoose = require("mongoose");

const AdminNotificationSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    unique: true
  },
  notification: {
    type: Number,
    required: true
  }
});

const Notification = mongoose.model("notification", AdminNotificationSchema);

module.exports = { Notification };
