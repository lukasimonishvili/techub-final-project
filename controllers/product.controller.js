const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Product } = require("../models/product.model");
const { Comment } = require("../models/comment.model");
const { User } = require("../models/user.model");

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
const uploadProductImg = multer({
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
    price: req.body.price,
    amount: req.body.amount,
    category: req.body.category,
    likes: [],
    disLikes: []
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
      console.log("Something went wrong");
    } else {
      console.log("comments deleted");
    }
  });
  User.find({}, (err, data) => {
    for (let i = 0; i < data.length; i++) {
      User.findOne({ _id: data[i]._id }, (er, user) => {
        for (let k = 0; k < user.cart.length; k++) {
          if (user.cart[k]._id == req.body.productId) {
            user.cart.splice(k, 1);
            break;
          }
        }
        user.save(errr => {
          if (!errr) {
            console.log("cart cleared");
          }
        });
      });
    }
  });
  res.json({ message: "product removed from database" });
};

const getAllProductList = (req, res) => {
  Product.find({}, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      res.json(data);
    }
  });
};

const getProductsByCategory = (req, res) => {
  Product.find({ category: req.params.category }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong", data: [] });
    } else {
      res.json({ message: "OK", data });
    }
  });
};

const searchProduct = (req, res) => {
  Product.find({}, (err, data) => {
    let searchResult = [];
    for (let i = 0; i < data.length; i++) {
      let regex = new RegExp(req.params.search, "i");
      let found = regex.test(data[i].title);
      if (found) {
        searchResult.push(data[i]);
        continue;
      }
    }
    res.json(searchResult);
  });
};

const getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.productId }, (err, data) => {
    if (err) {
      res.json(null);
    } else {
      res.json(data);
    }
  });
};

const likeProduct = (req, res) => {
  Product.findOne({ _id: req.body.productId }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      let disLikeChecked = false;
      let checkedDisLikeIndex = 0;
      for (let i = 0; i < data.disLikes.length; i++) {
        if (req.body.userId == data.disLikes[i]) {
          checkedDisLikeIndex = i;
          disLikeChecked = true;
          break;
        }
      }
      if (disLikeChecked) {
        data.disLikes.splice(checkedDisLikeIndex, 1);
        data.likes.push(req.body.userId);
        data.save(err => {
          if (err) {
            res.json({ message: "not saved" });
          } else {
            res.json({ likes: data.likes, disLikes: data.disLikes });
          }
        });
      } else {
        let likeChecked = false;
        let checkedLikeIndex = 0;
        for (let i = 0; i < data.likes.length; i++) {
          if (req.body.userId == data.likes[i]) {
            checkedLikeIndex = i;
            likeChecked = true;
            break;
          }
        }
        if (likeChecked) {
          data.likes.splice(checkedLikeIndex, 1);
          data.save(err => {
            if (err) {
              res.json({ message: "not saved" });
            } else {
              res.json({ likes: data.likes, disLikes: data.disLikes });
            }
          });
        } else {
          data.likes.push(req.body.userId);
          data.save(err => {
            if (err) {
              res.json({ message: "not saved" });
            } else {
              res.json({ likes: data.likes, disLikes: data.disLikes });
            }
          });
        }
      }
    }
  });
};

const disLikeProduct = (req, res) => {
  Product.findOne({ _id: req.body.productId }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      let likeChecked = false;
      let checkedLikeIndex = 0;
      for (let i = 0; i < data.likes.length; i++) {
        if (req.body.userId == data.likes[i]) {
          likeChecked = true;
          checkedLikeIndex = i;
          break;
        }
      }
      if (likeChecked) {
        data.likes.splice(checkedLikeIndex, 1);
        data.disLikes.push(req.body.userId);
        data.save(err => {
          if (err) {
            res.json({ message: "not saved" });
          } else {
            res.json({ likes: data.likes, disLikes: data.disLikes });
          }
        });
      } else {
        let disLikeChecked = false;
        let checkedDisLikeIndex = 0;
        for (let i = 0; i < data.disLikes.length; i++) {
          if (req.body.userId == data.disLikes[i]) {
            disLikeChecked = true;
            checkedDisLikeIndex = i;
            break;
          }
        }
        if (disLikeChecked) {
          data.disLikes.splice(checkedDisLikeIndex, 1);
          data.save(err => {
            if (err) {
              res.json({ message: "not saved" });
            } else {
              res.json({ likes: data.likes, disLikes: data.disLikes });
            }
          });
        } else {
          data.disLikes.push(req.body.userId);
          data.save(err => {
            if (err) {
              res.json({ message: "not saved" });
            } else {
              res.json({ likes: data.likes, disLikes: data.disLikes });
            }
          });
        }
      }
    }
  });
};

const editProduct = (req, res) => {
  let removeList = req.body.removeList.split(",");
  Product.findOne({ _id: req.params.productId }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      data.title = req.body.title;
      data.description = req.body.description;
      data.price = req.body.price;
      data.amount = req.body.amount;
      data.category = req.body.category;
      for (let i = 0; i < data.img.length; i++) {
        console.log(data.img[i]);
        for (let k = 0; k < removeList.length; k++) {
          if (data.img[i] == removeList[k]) {
            data.img.splice(i, 1);
            try {
              fs.unlinkSync(
                `${__dirname}/../client/src/img/uploads/${removeList[k]}`
              );
            } catch (erro) {
              console.error(erro);
            }
          }
        }
      }
      for (let i = 0; i < req.files.length; i++) {
        data.img.push(req.files[i].filename);
      }
      User.find({}, (er, users) => {
        for (let i = 0; i < users.length; i++) {
          User.findOne({ _id: users[i]._id }, (e, currentUser) => {
            for (let k = 0; k < currentUser.cart.length; k++) {
              if (req.params.productId == currentUser.cart[k]._id) {
                currentUser.cart.splice(k, 1, data);
                break;
              }
            }
            currentUser.save(ez => {
              if (!ez) {
                console.log(
                  `${currentUser.name} ${currentUser.lastName}: ${
                    currentUser._id
                  } cart updated`
                );
              }
            });
          });
        }
      });
      data.save(err => {
        if (!err) {
          console.log("good");
        } else {
          console.log("bad");
        }
      });
      res.json({ data, message: "Product saved" });
    }
  });
};

module.exports = {
  uploadProductImg,
  addProduct,
  removeProduct,
  getAllProductList,
  getProductsByCategory,
  searchProduct,
  getOneProduct,
  likeProduct,
  disLikeProduct,
  editProduct
};
