import React from "react";

export const ProductImageImg = props => {
  let photo = require(`../../img/uploads/${props.mainImg}`);
  return <img alt="" src={photo} />;
};
