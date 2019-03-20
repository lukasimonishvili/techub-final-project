const { Feedback } = require("../models/feedback.model");
const { User } = require("../models/user.model");
const { Message } = require("../models/message.modes");
const { Notification } = require("../models/admin.notification.model");

const addFeedback = (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, data) => {
    if (err) {
      res.json({ message: "Somthing went wrong" });
    } else {
      let newFeedback = {
        userId: req.body.userId,
        author: `${data.name} ${data.lastName}`,
        body: req.body.body
      };
      Feedback.create(newFeedback);
      res.json({ message: "Thank you for feedback" });
    }
  });
};

const messageUserToAdmin = (req, res) => {
  Message.findOne({ userId: req.body.userId }, (err, data) => {
    if (!data) {
      let newMessageBox = {
        userId: req.body.userId,
        body: [{ side: "user", text: req.body.body }]
      };
      Message.create(newMessageBox);
      Notification.create({
        from: req.body.userId,
        notification: 1
      });
      res.json({ data: newMessageBox.body, message: "sent" });
    } else {
      let newMessage = {
        side: "user",
        text: req.body.body
      };
      data.body.unshift(newMessage);
      Notification.findOne({ from: req.body.userId }, (er, not) => {
        not.notification = not.notification++;
        not.save(errr => {
          if (errr) {
            console.log("message sent withou notification");
          } else {
            console.log("message sent with notification");
          }
        });
      });
      data.save(errr => {
        if (errr) {
          res.json({ message: "Meesage dont sent" });
        } else {
          res.json({ data: data.body, message: "Sent" });
        }
      });
    }
  });
};

const messageAdminToUser = (req, res) => {
  Message.findOne({ userId: req.body.userId }, (err, data) => {
    if (!data) {
      let newMessageBox = {
        userId: req.body.userId,
        body: [{ side: "admin", text: req.body.body }]
      };
      Message.create(newMessageBox);
      User.findOne({ _id: req.body.userId }, (er, user) => {
        let notNumber = user.notification + 1;
        user.notification = notNumber;
        user.save(errr => {
          if (errr) {
            res.json({
              message: "Message sent withou notification",
              data: newMessageBox.body
            });
          } else {
            res.json({ message: "Message sent", data: newMessageBox.body });
          }
        });
      });
    } else {
      let newMessage = {
        side: "admin",
        text: req.body.body
      };
      data.body.unshift(newMessage);
      User.findOne({ _id: req.body.userId }, (er, user) => {
        let notNumber = user.notification + 1;
        user.notification = notNumber;
        user.save(errr => {
          if (errr) {
            console.log("message sent without notification");
          } else {
            console.log("notification sent");
          }
        });
      });
      data.save(errr => {
        if (errr) {
          res.json({ message: "Message not sent", data: data.body });
        } else {
          res.json({ message: "message sent", data: data.body });
        }
      });
    }
  });
};

const clearUserNotification = (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, data) => {
    data.notification = 0;
    data.save(er => {
      if (er) {
        res.json({
          message: "notification not cleared",
          data: data.notification
        });
      } else {
        res.json({ message: "notification cleared", data: data.notification });
      }
    });
  });
};

const clearAdminNotification = (req, res) => {
  Notification.findOne({ from: req.body.userId }, (err, data) => {
    data.notification = 0;
    data.save(er => {
      if (er) {
        res.json({
          message: "notification not cleared",
          data: data.notification
        });
      } else {
        res.json({ message: "notification cleared", data: data.notification });
      }
    });
  });
};

const getMessages = (req, res) => {
  Message.findOne({ userId: req.body.userId }, (err, data) => {
    User.findOne({ _id: data.userId }, (error, user) => {
      let sendData = {
        user: `${user.name} ${user.lastName}`,
        messages: data.body,
        userId: data.userId
      };
      res.json(sendData);
    });
  });
};

module.exports = {
  addFeedback,
  messageUserToAdmin,
  messageAdminToUser,
  clearUserNotification,
  clearAdminNotification,
  getMessages
};
