import React from "react";
import { ProductImageWrapper } from "./productImageWrapper";

export const ProductImageContainer = props => {
  return (
    <div className="product__image--container">
      <ProductImageWrapper
        imgStateHander={props.imgStateHander}
        mainImg={props.mainImg}
        images={props.images}
      />
    </div>
  );
};
