const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
// const multer = require("multer");
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, path.join(__dirname + "/../src/img/uploads"));
//   },
//   filename: function(req, file, cb) {
//     cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
//   }
// });
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 2
//   },
//   fileFilter: fileFilter
// });

const { connect } = require("./connect");
const { userRegister } = require("./controllers/user.controller");
const {
  uploadProduct,
  addProduct
} = require("./controllers/product.controller");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.post("/register", userRegister);
app.post("/login", logIn);

app.post("/addProduct", uploadProduct.array("img", 5), addProduct);

(async () => {
  try {
    await connect(
      "mongodb+srv://lukasimonishvili:xEYPzU3DLJakTYVL@cluster0-dxdyw.mongodb.net/test?retryWrites=true"
    );
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
