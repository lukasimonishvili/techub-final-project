const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    img: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    likes: {
      type: Array,
      required: true
    },
    disLikes: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = { Product };
