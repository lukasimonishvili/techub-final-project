import React from "react";
import { ProductImage } from "./productImage";
import { ProductInfo } from "./productInfo";

export const ProductInfoImageContainer = props => {
  return (
    <div className="product__column1 fl fl_jus_bet">
      <ProductImage
        imgStateHander={props.imgStateHander}
        mainImg={props.mainImg}
        images={props.images}
      />
      <ProductInfo
        amount={props.amount}
        price={props.price}
        productName={props.productName}
        description={props.description}
        likes={props.likes}
        disLikes={props.disLikes}
        likeStater={props.likeStater}
        productId={props.productId}
        disLikeStater={props.disLikeStater}
      />
    </div>
  );
};
