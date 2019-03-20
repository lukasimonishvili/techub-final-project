const { Feedback } = require("../models/feedback.model");
const { User } = require("../models/user.model");

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

module.exports = { addFeedback };
