const { Comment } = require("../models/comment.model");
const { User } = require("../models/user.model");

const addComment = (req, res) => {
  User.find({ _id: req.body.userId }, (err, data) => {
    if (err) {
      res.json({ message: "Somthing went wrong" });
    } else {
      let newComment = {
        userId: req.body.userId,
        productId: req.body.productId,
        body: req.body.body,
        author: `${data[0].name} ${data[0].lastName}`,
        userId: req.body.userId
      };
      Comment.create(newComment);
      res.json({ message: "okay", newComment });
    }
  });
};

const editComment = (req, res) => {
  Comment.findOne({ _id: req.body.commentId }, (err, data) => {
    if (err) {
      res.json({ message: "Somthing went wrong" });
    } else {
      data.body = req.body.body;
      data.save(err => {
        if (!err) {
          console.log("good");
        } else {
          console.log("bad");
        }
      });
      res.json({ message: "okay", newComment: data });
    }
  });
};

const deleteComment = (req, res) => {
  Comment.remove({ _id: req.body.commentId }, err => {
    if (err) {
      res.json({ message: "Somthing went wrong" });
    } else {
      res.json({ message: "removed" });
    }
  });
};

const getCommentsByProductId = (req, res) => {
  Comment.find({ productId: req.params.productId }, (err, data) => {
    if (err) {
      res.json({ message: "Somthing went wrong" });
    } else {
      res.json(data);
    }
  });
};

module.exports = {
  addComment,
  editComment,
  deleteComment,
  getCommentsByProductId
};
