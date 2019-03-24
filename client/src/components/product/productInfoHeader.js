import React from "react";
import { ProductInfoAddtocart } from "./productInfoAddtocart";

export const ProductInfoHeader = props => {
  return (
    <>
      <h2 className="product__info__header fl fl_jus_bet">
        {props.productName}
        <ProductInfoAddtocart productId={props.productId} />
      </h2>
    </>
  );
};
