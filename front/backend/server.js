const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const { connect } = require("./connect");
const { userRegister } = require("./controllers/user.controller");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.post("/register", userRegister);

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
