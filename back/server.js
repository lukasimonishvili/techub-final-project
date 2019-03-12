const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

mongoose.connect(``, {
  useNewUrlParser: true
});
mongoose.set("debug", true);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));
