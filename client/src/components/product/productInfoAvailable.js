import React from "react";

export const ProductInfoAvailable = props => {
  return (
    <span className="product__info__available">
      available now: <span className="available__number"> {props.amount}</span>
    </span>
  );
};
