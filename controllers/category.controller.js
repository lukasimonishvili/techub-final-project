const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");

const addCategory = (req, res) => {
    Product.find({ productId: req.body.productId }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      let newCategory = {
        title: req.body.title
      };
      Category.create(newCategory);
      res.json({ message: "created a new category", newCategory });
    }
  });
};

const editCategory = (req, res) => {
    Category.findOne({ title: req.body.title }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      data.title = req.body.title;
      data.save(err => {
        if (!err) {
          console.log("good");
        } else {
          console.log("bad");
        }
      });
      res.json({ message: "okay", newCategory: data });
    }
  });
};

const deleteCategory = (req, res) => {
    Category.remove({ title: req.body.title }, err => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      res.json({ message: "removed" });
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
