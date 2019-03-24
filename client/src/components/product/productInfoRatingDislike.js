import React from "react";
import { ProductInfoRatingDilikeImg } from "./productInfoRatingDislikeImg";

export const ProductInfoRatingDislike = props => {
  return (
    <button className="product__info__rating--dislike">
      <ProductInfoRatingDilikeImg
        likeStater={props.likeStater}
        productId={props.productId}
        disLikeStater={props.disLikeStater}
      />
    </button>
  );
};
