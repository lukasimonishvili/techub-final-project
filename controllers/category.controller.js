const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");
const { Comment } = require("../models/comment.model");
const { User } = require("../models/user.model");
const mongoose = require("mongoose");
const fs = require("fs");

const addCategory = (req, res) => {
  Category.findOne({ title: req.body.title.toUpperCase() }, (err, data) => {
    if (!data) {
      let newCat = {
        title: req.body.title.toUpperCase(),
        _id: mongoose.Types.ObjectId()
      };
      Category.create(newCat);
      res.json({ message: true, data: newCat });
    } else {
      res.json("That category already exists");
    }
  });
};

const editCategory = (req, res) => {
  Category.findOne({ title: req.body.title }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      data.title = req.body.newTitle.toUpperCase();
      data.save(err => {
        if (!err) {
          console.log("good");
        } else {
          console.log("bad");
        }
      });
    }
  });
  Product.updateMany(
    { category: req.body.title },
    { category: req.body.newTitle.toUpperCase() },
    er => {
      if (!er) {
        console.log("ok");
      }
    }
  );
  Category.find({}, (err, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title == req.body.title) {
        data.splice(i, 1, {
          title: req.body.newTitle.toUpperCase(),
          _id: mongoose.Types.ObjectId()
        });
        break;
      }
    }
    res.json(data);
  });
};

const deleteCategory = (req, res) => {
  Category.remove({ title: req.body.title }, err => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      Product.find({ category: req.body.title }, (error, data) => {
        for (let i = 0; i < data.length; i++) {
          Comment.deleteMany({ productId: data[i]._id }, erro => {
            if (erro) {
              console.log({ message: "Something went wrong" });
            } else {
              console.log({ message: "removed" });
            }
          });
          let currentProductId = data[i]._id;
          User.find({}, (e, users) => {
            console.log(`removing product ${currentProductId} from users cart`);
            for (let k = 0; k < users.length; k++) {
              User.findOne({ _id: users[k]._id }, (errro, user) => {
                for (let j = 0; j < user.cart.length; j++) {
                  if (user[k].cart[j]._id == currentProductId) {
                    user[k].cart.splice(j, 1);
                    break;
                  }
                }
                user.save(unsv => {
                  if (!unsv) {
                    console.log(
                      `${currentProductId} removed from ${user._id}'s cart`
                    );
                  }
                });
              });
            }
          });
          let imgs = data[i].img;
          for (let k = 0; k < imgs.length; k++) {
            try {
              fs.unlinkSync(
                `${__dirname}/../client/src/img/uploads/${imgs[k]}`
              );
            } catch (erro) {
              console.error(erro);
            }
          }
        }
      });
      Product.deleteMany({ category: req.body.title }, error => {
        if (!error) {
          res.json({ message: "products removed" });
        }
      });
    }
  });
};

const getCategoryList = (req, res) => {
  Category.find({}, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      res.json(data);
    }
  });
};

module.exports = {
  addCategory,
  editCategory,
  deleteCategory,
  getCategoryList
};
