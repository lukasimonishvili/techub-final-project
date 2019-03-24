import React from "react";

export const ProductImageWrapperImg = props => {
  let photo = require(`../../img/uploads/${props.source}`);
  return (
    <img
      className="product__image--small"
      alt=""
      src={photo}
      onClick={() => {
        props.imgStateHander([props.source], props.images);
      }}
    />
  );
};
