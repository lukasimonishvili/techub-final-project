const { Comment } = require("../models/comment.model");
const { User } = require("../models/user.model");
const mongoose = require("mongoose");

const addComment = (req, res) => {
  User.find({ _id: req.body.userId }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      let commentId = mongoose.Types.ObjectId();
      let newComment = {
        _id: commentId,
        userId: req.body.userId,
        productId: req.body.productId,
        body: req.body.body,
        author: `${data[0].name} ${data[0].lastName}`,
        userId: req.body.userId
      };
      Comment.create(newComment);
      res.json({ newComment });
    }
  });
};

const editComment = (req, res) => {
  Comment.findOne({ _id: req.body.commentId }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
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
      res.json({ message: "Something went wrong" });
    } else {
      res.json({ message: "removed" });
    }
  });
};

const getCommentsByProductId = (req, res) => {
  Comment.find({ productId: req.params.productId }, (err, data) => {
    if (err) {
      res.json(null);
    } else {
      if (data) {
        res.json(data);
      } else {
        res.json(null);
      }
    }
  });
};

module.exports = {
  addComment,
  editComment,
  deleteComment,
  getCommentsByProductId
};
