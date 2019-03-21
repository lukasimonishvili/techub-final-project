const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const { connect } = require("./connect");
const {
  addFeedback,
  messageUserToAdmin,
  messageAdminToUser,
  clearUserNotification,
  clearAdminNotification,
  getMessages
} = require("./controllers/admin.controller");
const {
  userRegister,
  logIn,
  removeUser,
  editUser,
  fillBalance,
  addToCart,
  removeFromCart,
  getOneUser,
  buyProduct
} = require("./controllers/user.controller");
const {
  addComment,
  editComment,
  deleteComment,
  getCommentsByProductId
} = require("./controllers/comment.controller");
const {
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
} = require("./controllers/product.controller");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.post("/addFeedback", addFeedback);
app.post("/messageUserToAdmin", messageUserToAdmin);
app.post("/messageAdminToUser", messageAdminToUser);
app.post("/clearUserNotification", clearUserNotification);
app.post("/clearAdminNotification", clearAdminNotification);
app.post("/getMessages", getMessages);

app.post("/register", userRegister);
app.post("/login", logIn);
app.post("/removeUser", removeUser);
app.post("/editUser/:userId", editUser);
app.post("/fillBalance", fillBalance);
app.post("/addToCart", addToCart);
app.post("/removeFromCart", removeFromCart);
app.post("/getOneUser/:userId", getOneUser);
app.post("/buyProduct", buyProduct);

app.post("/addProduct", uploadProductImg.array("img", 5), addProduct);
app.post(
  "/editProduct/:productId",
  uploadProductImg.array("img", 5),
  editProduct
);
app.post("/removeProduct", removeProduct);
app.post("/likeProducts", likeProduct);
app.post("/disLikeProduct", disLikeProduct);
app.get("/getAllproduct", getAllProductList);
app.get("/getByCategory/:category", getProductsByCategory);
app.get("/search/:search", searchProduct);
app.get("/getOne/:productId", getOneProduct);

app.get("/comment/:productId", getCommentsByProductId);
app.post("/addComment", addComment);
app.post("/editComment", editComment);
app.post("/removeComment", deleteComment);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
} else {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });
}

(async () => {
  try {
    await connect(
      "mongodb+srv://lukasimonishvili:xEYPzU3DLJakTYVL@cluster0-dxdyw.mongodb.net/test?retryWrites=true"
    );
    app.listen(port, () => {
      console.log(`backend server run on port: ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
