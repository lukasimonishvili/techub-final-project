const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");

const saltRound = 10;

const userRegister = (req, res) => {
  User.find({ eMail: req.body.eMail }, async (err, data) => {
    if (data.length > 0) {
      res.json({ message: "user with same email already registred" });
      console.log(data);
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

module.exports = { userRegister };