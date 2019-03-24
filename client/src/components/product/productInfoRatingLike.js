import React from "react";
import { ProductInfoRatingLikeImg } from "./productInfoRatingLikeImg";

export const ProductInfoRatingLike = props => {
  return (
    <button className="product__info__rating--like">
      <ProductInfoRatingLikeImg
        productId={props.productId}
        likeStater={props.likeStater}
        disLikeStater={props.disLikeStater}
      />
    </button>
  );
};
