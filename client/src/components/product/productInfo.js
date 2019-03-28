import React from "react";
import { ProductInfoHeader } from "./productInfoHeader";
import { ProductInfoDescription } from "./productInfoDescription";
import { ProductInfoCostQuantity } from "./productInfoCostQuantity";
import { ProductInfoRating } from "./productInfoRating";

export const ProductInfo = props => {
  return (
    <div className="product__info fl_dir_col">
      <ProductInfoHeader
        productId={props.productId}
        productName={props.productName}
        amount={props.amount}
      />
      <div className="product__description-item">
      <ProductInfoDescription description={props.description} />
      <ProductInfoCostQuantity amount={props.amount} price={props.price} />
      <ProductInfoRating
        productId={props.productId}
        likes={props.likes}
        disLikes={props.disLikes}
        likeStater={props.likeStater}
        disLikeStater={props.disLikeStater}
      /></div>
    </div>
  );
};
