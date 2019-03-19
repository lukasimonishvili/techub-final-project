import React from "react";
import { ProductImage } from "./productImage";
import { ProductInfo } from "./productInfo";
import { Comment } from "../comment/comment";
import { Feedback } from "../feedback/feedback";

export const Product = () => {
  return (
    <div className="product">
      <ProductImage />
      <ProductInfo />
      <>
        <Comment />
        <Feedback />
      </>
    </div>
  );
};
