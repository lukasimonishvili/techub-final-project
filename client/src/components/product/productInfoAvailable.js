import React from "react";

export const ProductInfoAvailable = props => {
  return (
    <span className="product__info__available">
      available now {props.amount}
    </span>
  );
};
