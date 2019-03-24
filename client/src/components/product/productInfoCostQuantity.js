import React from "react";
import { ProductInfoCost } from "./ProductInfoCost";
import { ProductInfoAvailable } from "./productInfoAvailable";

export const ProductInfoCostQuantity = props => {
  return (
    <div className="fl">
      <ProductInfoCost price={props.price} />
      <ProductInfoAvailable amount={props.amount} />
    </div>
  );
};
