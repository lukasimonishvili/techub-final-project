import React from "react";
import { Comment } from "../comment/comment";
import { Feedback } from "../feedback/feedback";
import { ProductInfoImageContainer } from "./productInfo&productImageContainer";

export const Product = () => {
  return (
    <div className="product">
      <ProductInfoImageContainer/>
      <Comment />
      <Feedback />
    </div>
  );
};
