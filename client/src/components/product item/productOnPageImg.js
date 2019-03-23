import React from "react";

export const ProductOnPageImg = props => {
  let photo = require(`../../img/uploads/${props.image}`);
  return (
    <img className="productOnPage_img" alt="product thumbnail" src={photo} />
  );
};
