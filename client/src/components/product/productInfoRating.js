import React from "react";
import { ProductInfoRatingLike } from "./productInfoRatingLike";
import { ProductInfoRatingLikeCount } from "./productInfoRatingLikeCount";
import { ProductInfoRatingDislike } from "./productInfoRatingDislike";
import { ProductInfoRatingDislikeCount } from "./productInfoRatingDislikeCount";
import { ProductInfoManagequantity } from "./productInfoManagequantity";

export const ProductInfoRating = props => {
  return (
    <span className="product__info__rating fl">
      <ProductInfoRatingLike
        productId={props.productId}
        likeStater={props.likeStater}
        disLikeStater={props.disLikeStater}
      />
      <ProductInfoRatingLikeCount likes={props.likes} />
      <ProductInfoRatingDislike
        likeStater={props.likeStater}
        productId={props.productId}
        disLikeStater={props.disLikeStater}
      />
      <ProductInfoRatingDislikeCount disLikes={props.disLikes} />
      <ProductInfoManagequantity />
    </span>
  );
};
