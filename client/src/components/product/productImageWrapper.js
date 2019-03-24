import React from "react";
import { ProductImageWrapperImg } from "./productImageWrapperImg";

export const ProductImageWrapper = props => {
  return (
    <div className="product__image__wrapper">
      {props.images.map(photo => {
        if (photo !== props.mainImg[0]) {
          return (
            <ProductImageWrapperImg
              imgStateHander={props.imgStateHander}
              key={photo}
              source={photo}
              images={props.images}
            />
          );
        }
      })}
    </div>
  );
};
