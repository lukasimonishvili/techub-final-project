const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");
const fs = require("fs");

const addCategory = (req, res) => {
  Category.findOne({ title: req.body.title.toUpperCase() }, (err, data) => {
    if (!data) {
      Category.create({ title: req.body.title.toUpperCase() });
      res.json("Category created");
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
        data.splice(i, 1);
        data.push({ title: req.body.newTitle.toUpperCase(), _id: i });
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
