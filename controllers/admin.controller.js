const { Feedback } = require("../models/feedback.model");
const { User } = require("../models/user.model");
const { Message } = require("../models/message.modes");
const { Notification } = require("../models/admin.notification.model");

const addFeedback = (req, res) => {
  let newFeedback = {
    userId: req.body.userId,
    productId: req.body.userId,
    body: req.body.body,
    title: req.body.title
  };
  Feedback.create(newFeedback);
  res.json({ message: "Thank you for your feedback" });
};

const removeFeedback = (req, res) => {
  Feedback.find({}, (error, data) => {
    Feedback.remove({ _id: req.body.id }, err => {
      if (!err) {
        for (let i = 0; i < data.length; i++) {
          if (data[i]._id == req.body.id) {
            data.splice(i, 1);
            break;
          }
        }
        res.json({ message: "feedback removed", data });
      } else {
        res.json({ message: "Somthing went wrong", data });
      }
    });
  });
};

const getFeedbacks = (req, res) => {
  Feedback.find({}, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json([]);
    }
  });
};

const messageUserToAdmin = (req, res) => {
  Message.findOne({ userId: req.body.userId }, (err, data) => {
    if (!data) {
      let newMessageBox = {
        userId: req.body.userId,
        body: [{ side: "user", text: req.body.body }],
        notification: 0
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
      data.body.push(newMessage);
      Notification.findOne({ from: req.body.userId }, (e, notf) => {
        notf.notification++;
        notf.save(error => {
          if (error) {
            console.log("notification not set");
          }
        });
      });
      data.save(errr => {
        if (errr) {
          res.json({ message: "Meesage isn't sent" });
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
        body: [{ side: "admin", text: req.body.body }],
        notification: 1
      };
      Message.create(newMessageBox);
      Notification.create({ from: req.body.userId, notification: 0 });
      res.json({ message: "message sent", data: newMessageBox.body });
    } else {
      let newMessage = {
        side: "admin",
        text: req.body.body
      };
      data.body.push(newMessage);
      Message.findOne({ userId: req.body.userId }, (er, user) => {
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
  Message.findOne({ userId: req.body.userId }, (err, data) => {
    if (!data) {
      res.json("Nothing to change");
    } else {
      data.notification = 0;
      data.save(er => {
        if (er) {
          res.json({
            message: "notification not cleared",
            data: data.notification
          });
        } else {
          res.json({ message: "notification cleared", data: data });
        }
      });
    }
  });
};

const clearAdminNotification = (req, res) => {
  Notification.findOne({ from: req.body.userId }, (err, data) => {
    if (data) {
      data.notification = 0;
      data.save(er => {
        if (er) {
          res.json({
            message: "notification not cleared",
            data: data.notification
          });
        } else {
          res.json({
            message: "notification cleared",
            data: data.notification
          });
        }
      });
    } else {
      res.json({ data: 0 });
    }
  });
};

const getMessages = (req, res) => {
  Message.findOne({ userId: req.body.userId }, (err, data) => {
    if (data !== null) {
      res.json(data);
    } else {
      let emptyData = {
        notification: 0,
        body: []
      };
      res.json(emptyData);
    }
  });
};

const checkNotificationsForAdmin = (req, res) => {
  Notification.find({}, (err, data) => {
    if (data.length) {
      res.json(data);
    } else {
      res.json([]);
    }
  });
};

module.exports = {
  addFeedback,
  removeFeedback,
  getFeedbacks,
  messageUserToAdmin,
  messageAdminToUser,
  clearUserNotification,
  clearAdminNotification,
  getMessages,
  checkNotificationsForAdmin
};
