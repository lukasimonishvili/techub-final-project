const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const { connect } = require("./connect");
const { userRegister, logIn } = require("./controllers/user.controller");
const {
  addComment,
  editComment,
  deleteComment,
  getCommentsByProductId
} = require("./controllers/comment.controller");
const {
  uploadProduct,
  addProduct,
  removeProduct
} = require("./controllers/product.controller");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
} else {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });
}

app.post("/register", userRegister);
app.post("/login", logIn);

app.post("/addProduct", uploadProduct.array("img", 5), addProduct);
app.post("/removeProduct", removeProduct);

app.get("/comment/:productId", getCommentsByProductId);
app.post("/addComment", addComment);
app.post("/editComment", editComment);
app.post("/removeComment", deleteComment);

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
