const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");

const saltRound = 10;

const userRegister = (req, res) => {
  User.find({ eMail: req.body.eMail }, async (err, data) => {
    if (data.length > 0) {
      res.json({ message: "user with same email already registred" });
    } else {
      if (req.body.password.length < 6) {
        res.json({ message: "Email is invalid or already taken" });
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
              shoppHistory: []
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
      res.json({ message: "Somthing went wrong" });
    } else {
      if (!data.length) {
        res.json({
          message: "The eMail you entered doesn't match any account"
        });
      } else {
        let passwdVerify = bcrypt.compareSync(
          req.body.password,
          data[0].password
        );
        if (!passwdVerify) {
          res.json({ message: "The password you entered is incorrect" });
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
      res.json({ message: "Somthing went wrong" });
    } else {
      res.json({ message: "removed" });
    }
  });
};

const editUser = (req, res) => {
  User.findOne({ _id: req.params.userId }, (err, data) => {
    bcrypt.hash(req.body.password, saltRound).then(async hash => {
      data.name = req.body.name;
      data.lastName = req.body.lastName;
      data.eMail = req.body.eMail;
      data.password = hash;
      data.save(err => {
        if (err) {
          res.json({ message: "Changes not accepted" });
        } else {
          res.json({ message: "saved", data });
        }
      });
    });
  });
};

module.exports = { userRegister, logIn, removeUser, editUser };
