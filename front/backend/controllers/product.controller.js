const multer = require("multer");
const path = require("path");
const { Product } = require("../models/product.model");

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname + "/../../src/img/uploads"));
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

module.exports = { uploadProduct, addProduct };
