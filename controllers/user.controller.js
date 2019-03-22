const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");
const { Comment } = require("../models/comment.model");
const { Feedback } = require("../models/feedback.model");
const { Product } = require("../models/product.model");

const saltRound = 10;

const userRegister = (req, res) => {
  User.find({ eMail: req.body.eMail }, async (err, data) => {
    if (data.length > 0) {
      res.json({ message: "Email is invalid or already taken" });
    } else {
      if (req.body.password.length < 6) {
        res.json({ message: "Password should contain min 6 symbols" });
      } else {
        if (req.body.password !== req.body.repassword) {
          res.json({ message: "Those passwords didn`t match. Try again" });
        } else {
          bcrypt.hash(req.body.password, saltRound).then(async hash => {
            const newUser = {
              name: req.body.name,
              lastName: req.body.lastName,
              password: hash,
              eMail: req.body.eMail,
              birthDay: req.body.birthDay,
              balance: 0,
              cart: [],
              shoppHistory: [],
              notification: 0
            };
            await User.create(newUser);
            res.json({ message: "registration successfully" });
          });
        }
      }
    }
  });
};

const logIn = (req, res) => {
  User.find({ eMail: req.body.eMail }, (err, data) => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      if (!data.length) {
        res.json({
          message: "The eMail you entered doesn't match any account",
          data: {
            status: false
          }
        });
      } else {
        let passwdVerify = bcrypt.compareSync(
          req.body.password,
          data[0].password
        );
        if (!passwdVerify) {
          res.json({
            message: "The password you entered is incorrect",
            data: {
              status: false
            }
          });
        } else {
          res.json({ message: "Okay", data: data[0] });
        }
      }
    }
  });
};

const removeUser = (req, res) => {
  User.remove({ _id: req.body.userId }, err => {
    if (err) {
      res.json({ message: "Something went wrong" });
    } else {
      res.json({ message: "removed" });
    }
  });
};

const editUser = (req, res) => {
  User.findOne({ _id: req.params.userId }, (err, data) => {
    let passwdVerify = bcrypt.compareSync(req.body.oldPassword, data.password);
    if (!passwdVerify) {
      res.json({ message: "Wrong password", data });
    } else {
      if (req.body.newPassword) {
        if (req.body.newPassword.length < 6) {
          res.json({ message: "Password should contain min 6 symbols", data });
        } else {
          Comment.updateMany(
            { userId: req.params.userId },
            { author: `${req.body.name} ${req.body.lastName}` },
            erro => {
              if (erro) {
                console.log("comments not saved");
              } else {
                console.log("saved");
              }
            }
          );
          Feedback.updateMany(
            { userId: req.params.userId },
            { author: `${req.body.name} ${req.body.lastName}` },
            errr => {
              if (errr) {
                console.log("feedback isn't changed");
              }
            }
          );
          bcrypt.hash(req.body.newPassword, saltRound).then(async hash => {
            data.password = hash;
            data.name = req.body.name;
            data.lastName = req.body.lastName;
            data.save(err => {
              if (err) {
                res.json({ message: "Changes not accepted", data });
              } else {
                res.json({ message: "saved", data });
              }
            });
          });
        }
      } else {
        Comment.updateMany(
          { userId: req.params.userId },
          { author: `${req.body.name} ${req.body.lastName}` },
          erro => {
            if (erro) {
              console.log("comments not saved");
            } else {
              console.log("saved");
            }
          }
        );
        Feedback.updateMany(
          { userId: req.params.userId },
          { author: `${req.body.name} ${req.body.lastName}` },
          errr => {
            if (errr) {
              console.log("feedback isn't changed");
            }
          }
        );
        data.name = req.body.name;
        data.lastName = req.body.lastName;
        data.save(err => {
          if (err) {
            res.json({ message: "Changes not accepted", data });
          } else {
            res.json({ message: "saved", data });
          }
        });
      }
    }
  });
};

const fillBalance = (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, data) => {
    if (err) {
      res.json({ message: "balance not filled", balance: data.balance });
    } else {
      data.balance = data.balance + Number(req.body.balance);
      data.save(errr => {
        if (errr) {
          res.json({ message: "balance not filled", balance: data.balance });
        } else {
          res.json({ message: "Balance filled", balance: data.balance });
        }
      });
    }
  });
};

const addToCart = (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, data) => {
    Product.findOne({ _id: req.body.productId }, (er, product) => {
      let alreadyInCart = false;
      for (let i = 0; i < data.cart.length; i++) {
        if (data.cart[i]._id == req.body.productId) {
          alreadyInCart = true;
        }
      }
      if (alreadyInCart) {
        res.json({
          message: "this product is already in your cart",
          data: data.cart
        });
      } else {
        data.cart.unshift(product);
        data.save(errr => {
          if (errr) {
            res.json({ message: "failed to add to cart", data: data.cart });
          } else {
            res.json({ message: "product added to cart", data: data.cart });
          }
        });
      }
    });
  });
};

const removeFromCart = (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, data) => {
    for (let i = 0; i < data.cart.length; i++) {
      if (data.cart[i]._id == req.body.productId) {
        data.cart.splice(i, 1);
        break;
      }
    }
    data.save(er => {
      if (er) {
        res.json({
          message: "Something went wrong. Try again!",
          data: data.cart
        });
      } else {
        res.json({
          message: "Product removed from your cart",
          data: data.cart
        });
      }
    });
  });
};

const getOneUser = (req, res) => {
  User.findOne({ _id: req.params.userId }, (err, data) => {
    res.json(data);
  });
};

const buyProduct = (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, data) => {
    data.balance -= Number(req.body.spendMoney);
    for (let i = 0; i < req.body.products.length; i++) {
      data.shoppHistory.push({
        productId: req.body.products[i].productId,
        title: req.body.products[i].title,
        quantity: req.body.products[i].amount
      });
      Product.findOne(
        { _id: req.body.products[i].productId },
        (er, product) => {
          product.amount -= Number(req.body.products[i].amount);
          product.save(errr => {
            if (!errr) {
              console.log(`${product.title} amount now = ${product.amount}`);
            }
          });
        }
      );
    }
    data.cart = [];
    data.save(errr => {
      if (!errr) {
        res.json({ message: "Thank you for buying", cart: data.cart });
      }
    });
  });
};

module.exports = {
  userRegister,
  logIn,
  removeUser,
  editUser,
  fillBalance,
  addToCart,
  removeFromCart,
  getOneUser,
  buyProduct
};
