const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Product } = require("../models/product.model");
const { Comment } = require("../models/comment.model");

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname + "/../client/src/img/uploads"));
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  }
});
const uploadProduct = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
});

const addProduct = (req, res) => {
  let newProduct = {
    title: req.body.title,
    img: [],
    description: req.body.description,
    price: req.body.price + "$",
    amount: req.body.amount,
    likes: 0,
    disLikes: 0
  };
  for (let i = 0; i < req.files.length; i++) {
    newProduct.img.push(req.files[i].filename);
  }
  Product.create(newProduct);
  res.json({ message: "Product added" });
};

const removeProduct = (req, res) => {
  console.log("removing Product...");
  Product.findOne({ _id: req.body.productId }, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      for (let i = 0; i < data.img.length; i++) {
        try {
          fs.unlinkSync(
            `${__dirname}/../client/src/img/uploads/${data.img[i]}`
          );
        } catch (erro) {
          console.error(erro);
        }
      }
    }
    data.remove(erro => {
      if (!erro) {
        console.log("good");
      } else {
        console.log("bad");
      }
    });
  });
  console.log("removing comments for that products...");
  Comment.deleteMany({ productId: req.body.productId }, err => {
    if (err) {
      console.log("Somthing went wrong");
    } else {
      console.log("comments deleted");
    }
  });
  res.json({ message: "product removed from database" });
};

module.exports = { uploadProduct, addProduct, removeProduct };
