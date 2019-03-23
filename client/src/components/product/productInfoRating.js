import React from "react";
import { ProductInfoRatingLike } from "./productInfoRatingLike";
import { ProductInfoRatingLikeCount } from "./productInfoRatingLikeCount";
import { ProductInfoRatingDislike } from "./productInfoRatingDislike";
import { ProductInfoRatingDislikeCount } from "./productInfoRatingDislikeCount";
import { ProductInfoManagequantity } from "./productInfoManagequantity";

export const ProductInfoRating = () => {
  return (
    <span className="product__info__rating fl">
      <ProductInfoRatingLike />
      <ProductInfoRatingLikeCount />
      <ProductInfoRatingDislike />
      <ProductInfoRatingDislikeCount />
      <ProductInfoManagequantity />
    </span>
  );
};
