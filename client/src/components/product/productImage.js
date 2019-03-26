import React from "react";
import { ProductImageImg } from "./productImageImg";
import { ProductImageContainer } from "./productImageContainer";

export const ProductImage = props => {
  return (
    <div className="product__image">
      {props.mainImg.map(photo => {
        return <ProductImageImg key={photo} mainImg={photo} />;
      })}
      <ProductImageContainer
        imgStateHander={props.imgStateHander}
        mainImg={props.mainImg}
        images={props.images}
      />
    </div>
  );
};
